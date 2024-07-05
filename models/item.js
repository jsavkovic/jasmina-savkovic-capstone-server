import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getAllItems = () => {
    return db('item').select('*');
};

export const getLendItems = () => {
    return db('item')
        .join('item_category', 'item.category_id', 'item_category.id')
        .where('item_category.category', 'lend')
        .select('item.*')
};

export const getGiftItems = () => {
    return db('item')
        .join('item_category', 'item.category_id', 'item_category.id')
        .where('item_category.category', 'gift')
        .select('item.*')
};

export const createItem = (newItem) => {
    return db('item').insert(newItem).returning('*');
};

export const getItemById = (itemId) => {
    return db('item').where({ id: itemId }).first();
};