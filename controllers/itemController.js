import knex from 'knex';
import knexConfig from '../knexfile.js';
const db = knex(knexConfig);

import { getAllItems, getItemsByCategory, createItem, getItemById, updateItemById, deleteItemById } from '../models/item.js'

export const getAllItemsHandler = async (req, res) => {
    try {
        const items = await getAllItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
};

export const getItemsHandler = async (req, res) => {
    const { category } = req.params;
    try {
        const items = await getItemsByCategory(category);
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: `Failed to retrieve ${category} items` });
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
        res.status(500).json({ error: 'Failed to retrieve item' });
    }
};

export const updateItemByIdHandler = async (req, res) => {
    const { itemId } = req.params;
    const updatedItem = req.body;

    try {
        const affectedRows = await updateItemById(itemId, updatedItem);
        if (affectedRows) {
            res.status(200).json({ message: 'Item successfully updated' });
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to update item' });
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