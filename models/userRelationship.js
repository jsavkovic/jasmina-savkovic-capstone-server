import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getFriendsByUserId = (userId) => {
    return db('user_relationship')
        .join('users as u1', 'user_relationship.sender_id', 'u1.id')
        .join('users as u2', 'user_relationship.receiver_id', 'u2.id')
        .where(function () {
            this.where('user_relationship.sender_id', userId)
                .orWhere('user_relationship.receiver_id', userId);
        })
        .andWhere('relationship_status_id', 2)
        .select('user_relationship.*', 'u1.first_name as sender_first_name', 'u1.last_name as sender_last_name', 'u2.first_name as receiver_first_name', 'u2.last_name as receiver_last_name');
};

export const getPendingRequestsByUserId = (userId) => {
    return db('user_relationship')
        .join('users as u1', 'user_relationship.sender_id', 'u1.id')
        .join('users as u2', 'user_relationship.receiver_id', 'u2.id')
        .where(function () {
            this.where('user_relationship.sender_id', userId)
                .orWhere('user_relationship.receiver_id', userId);
        })
        .andWhere('relationship_status_id', 1)
        .select('user_relationship.*', 'u1.first_name as sender_first_name', 'u1.last_name as sender_last_name', 'u2.first_name as receiver_first_name', 'u2.last_name as receiver_last_name');
};

