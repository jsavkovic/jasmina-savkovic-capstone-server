import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getAllItems = () => {
    return db('item').select('*');
};