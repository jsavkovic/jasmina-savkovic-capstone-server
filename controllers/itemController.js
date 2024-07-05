import knex from 'knex';
import knexConfig from '../knexfile.js';
const db = knex(knexConfig);

import { getAllItems, getLendItems, getGiftItems, createItem, getItemById, updateItemById, deleteItemById } from '../models/item.js'

export const getAllItemsHandler = async (req, res) => {
    try {
        const items = await getAllItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
};

export const getLendItemsHandler = async (req, res) => {
    try {
        const items = await getLendItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve lend items' });
    }
}

export const getGiftItemsHandler = async (req, res) => {
    try {
        const items = await getGiftItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve gift items' });
    }
}

export const createItemHandler = async (req, res) => {
    try {
        const newItem = {
            name: req.body.name,
            description: req.body.description,
            status_id: req.body.status_id,
            type_id: req.body.type_id,
            image: req.body.image,
            category_id: req.body.category_id,
            user_id: req.body.user_id,
            created_at: db.fn.now(),
            updated_at: db.fn.now()
        };

        console.log('Creating item with data:', newItem);

        const [item] = await createItem(newItem);
        res.status(201).json(item);
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