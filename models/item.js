import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getAllItems = () => {
    return db('item').select('*');
};

export const createItem = async (newItem) => {
    const [id] = await db('item').insert(newItem);
    return getItemById(id);
};

export const getItemById = (itemId) => {
    return db('item')
        .join('item_status', 'item.status_id', '=', 'item_status.id')
        .join('item_type', 'item.type_id', '=', 'item_type.id')
        .join('users', 'item.user_id', '=', 'users.id')
        .where('item.id', itemId)
        .select(
            'item.*',
            'item_status.status as status',
            'item_type.type as category',
            db.raw("CONCAT(users.first_name, ' ', users.last_name) as owner")
        )
        .first();
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