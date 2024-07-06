import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getBorrowRequestByUser = (userId) => {
    return db('borrow_request')
        .where('borrower_id', userId)
        .orWhere('lender_id', userId)
        .select('*');
};

export const getBorrowRequestByItem = (itemId) => {
    return db('borrow_request')
        .where('item_id', itemId)
        .select('*')
};

export const getBorrowRequests = (userId, itemId) => {
    let query = db('borrow+request').select('*');

    if (userId) {
        query = query.where(function () {
            this.where('borrower_id', userId)
                .orWhere('lender_id', userId);
        });
    }
    if (itemId) {
        query = query.where('item_id', itemId);
    }
    return query;
};

export const createBorrowRequest = (borrowRequest) => {
    return db('borrow_request').insert(borrowRequest);
};
