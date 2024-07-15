import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getBorrowRequests = () => {
    return db('borrow_request')
        .select('*');
};

export const getBorrowRequestsByBorrower = (userId) => {
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
        .where('borrow_request.borrower_id', userId);
};

export const getBorrowRequestsByLender = (userId, statusId) => {
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
        .where('borrow_request.lender_id', userId)
        .modify((queryBuilder) => {
            if (statusId) {
                queryBuilder.andWhere('borrow_request.borrow_status_id', statusId);
            }
        });
};

export const getBorrowRequestById = (requestId) => {
    console.log(`Fetching borrow request with id: ${requestId}`);
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
        .where('borrow_request.id', requestId)
        .first()
        .debug();
};


export const getBorrowRequestByItem = (itemId) => {
    return db('borrow_request')
        .join('borrow_status', 'borrow_request.borrow_status_id', 'borrow_status.id')
        .join('users as borrower', 'borrow_request.borrower_id', 'borrower.id')
        .where('borrow_request.item_id', itemId)
        .select(
            'borrow_request.*',
            'borrow_status.status as borrow_status',
            'borrower.first_name as borrower_first_name',
            'borrower.last_name as borrower_last_name',
            'borrower.email as borrower_email',
            'borrower.image as borrower_image'
        );
};

export const getBorrowRequestsByStatus = (statusId) => {
    return db('borrow_request')
        .where('borrow_status_id', statusId)
        .select('*');
};

export const createBorrowRequest = (borrowRequest) => {
    return db('borrow_request').insert(borrowRequest);
};

export const checkOverlappingRequests = (item_id, start_date, end_date) => {
    console.log('Checking for overlapping requests:', { item_id, start_date, end_date });
    return db('borrow_request')
        .where('item_id', item_id)
        .andWhere(function () {
            this.where(function () {
                this.whereBetween('start_date', [start_date, end_date])
                    .orWhereBetween('end_date', [start_date, end_date])
                    .orWhere(function () {
                        this.where('start_date', '<', start_date)
                            .andWhere('end_date', '>', end_date);
                    });
            });
        })
        .andWhere(function () {
            this.where('borrow_status_id', 1)
                .orWhere('borrow_status_id', 2)
                .orWhere('borrow_status_id', 3);
        });
};

export const updateBorrowRequest = (requestId, updateData) => {
    console.log(`Updating borrow request with id: ${requestId} and data:`, updateData);
    return db('borrow_request')
        .where('id', requestId)
        .update(updateData);
};

export const deleteBorrowRequest = (requestId) => {
    return db('borrow_request').where('id', requestId).del();
};
