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
        .join('item', 'borrow_request.item_id', 'item.id')
        .join('users as borrower', 'borrow_request.borrower_id', 'borrower.id')
        .select(
            'borrow_request.*',
            'item.name as item_name',
            'item.image as item_image',
            'borrower.first_name as borrower_first_name',
            'borrower.last_name as borrower_last_name'
        )
        .where('borrow_request.lender_id', userId)
        .andWhere('borrow_request.borrow_status_id', 1);
};

export const getBorrowRequestById = (id) => {
    return db('borrow_request')
        .join('item', 'borrow_request.item_id', 'item.id')
        .join('users as borrower', 'borrow_request.borrower_id', 'borrower.id')
        .join('users as lender', 'borrow_request.lender_id', 'lender.id')
        .select(
            'borrow_request.*',
            'item.name as item_name',
            'item.image as item_image',
            'borrower.first_name as borrower_first_name',
            'borrower.last_name as borrower_last_name',
            'lender.first_name as lender_first_name',
            'lender.last_name as lender_last_name'
        )
        .where('borrow_request.id', id)
        .first();
};


export const getBorrowRequestByItem = (itemId) => {
    return db('borrow_request')
        .where('item_id', itemId)
        .select('*');
};

export const getBorrowRequestsByStatus = (statusId) => {
    return db('borrow_request')
        .where('borrow_status_id', statusId)
        .select('*');
};

export const createBorrowRequest = (borrowRequest) => {
    return db('borrow_request').insert(borrowRequest);
};

export const updateBorrowRequest = (requestId, updateData) => {
    return db('borrow_request')
        .where('id', requestId)
        .update(updateData);
};
