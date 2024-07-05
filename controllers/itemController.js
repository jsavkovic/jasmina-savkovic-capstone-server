import { getAllItems, getLendItems } from '../models/item.js'

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