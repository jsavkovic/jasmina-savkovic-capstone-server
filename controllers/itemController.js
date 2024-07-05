import knex from 'knex';
import knexConfig from '../knexfile.js';
const db = knex(knexConfig);

import { getAllItems, getLendItems, getGiftItems, createItem } from '../models/item.js'

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