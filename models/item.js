import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getAllItems = () => {
    return db('item').select('*');
};

export const getItemsByCategory = (category) => {
    return db('item')
        .join('item_category', 'item.category_id', 'item_category.id')
        .where('item_category.category', category)
        .select('item.*');
};

export const createItem = async (newItem) => {
    const [id] = await db('item')
        .insert(newItem);
    return getItemById(id);
};

export const getItemById = (itemId) => {
    return db('item').where({ id: itemId }).first();
};

export const updateItemById = (itemId, updatedItem) => {
    return db('item')
        .where({ id: itemId })
        .update(updatedItem);
}

export const deleteItemById = (itemId) => {
    return db('item')
        .where({ id: itemId })
        .del();
};