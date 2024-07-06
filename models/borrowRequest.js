import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getBorrowRequests = () => {
    return db('borrow_request')
        .select('*');
};

export const getBorrowRequestsByBorrower = (userId) => {
    return db('borrow_request')
        .where('borrower_id', userId)
        .select('*');
};

export const getBorrowRequestsByLender = (userId) => {
    return db('borrow_request')
        .where('lender_id', userId)
        .select('*');
};

export const getBorrowRequestByItem = (itemId) => {
    return db('borrow_request')
        .where('item_id', itemId)
        .select('*');
};

export const getBorrowRequestById = (requestId) => {
    return db('borrow_request')
        .where('id', requestId)
        .first();
};

export const createBorrowRequest = (borrowRequest) => {
    return db('borrow_request').insert(borrowRequest);
};
