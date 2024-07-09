import knex from 'knex';
import knexConfig from '../knexfile.js';
const db = knex(knexConfig);

import { getAllItems, createItem, getItemById, updateItemById, deleteItemById } from '../models/item.js'

export const getAllItemsHandler = async (req, res) => {
    try {
        const items = await getAllItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
};

export const createItemHandler = async (req, res) => {
    const { name, description, status_id, type_id, category_id, user_id } = req.body;
    const file = req.file;

    try {
        const newItem = {
            name,
            description,
            status_id,
            type_id,
            image: file ? file.path : null,
            category_id,
            user_id,
            created_at: db.fn.now(),
            updated_at: db.fn.now()
        };

        console.log('Creating item with data:', newItem);

        const createdItem = await createItem(newItem);
        res.status(201).json(createdItem);
    } catch (err) {
        console.error('Error creating item:', err);
        res.status(500).json({ error: 'Failed to create item' });
    }
};


export const getItemByIdHandler = async (req, res) => {
    const { itemId } = req.params;

    try {
        const item = await getItemById(itemId);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (err) {
        console.error(`Error retrieving item with ID ${itemId}:`, err);
        res.status(500).json({ error: 'Failed to retrieve item' });
    }
};

export const updateItemByIdHandler = async (req, res) => {
    const { itemId } = req.params;
    const { name, description, type_id, status_id } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        if (!name || !description || !type_id || !status_id) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const updatedItem = await updateItemById(itemId, {
            name,
            description,
            type_id,
            status_id,
            ...(image && { image })
        });

        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateItemStatusHandler = async (req, res) => {
    const { itemId } = req.params;
    const { status_id } = req.body;

    try {
        if (typeof status_id === 'undefined') {
            return res.status(400).json({ error: 'status_id is required' });
        }

        const updatedItem = await updateItemById(itemId, { status_id });

        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json({ message: 'Item status updated successfully' });
    } catch (error) {
        console.error('Error updating item status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const deleteItemByIdHandler = async (req, res) => {
    const { itemId } = req.params;

    try {
        const affectedRows = await deleteItemById(itemId);
        if (affectedRows) {
            res.status(200).json({ message: 'Item successfully deleted' });
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete item' });
    }
}