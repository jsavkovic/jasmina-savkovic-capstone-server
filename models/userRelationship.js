import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

export const getUserRelationshipById = (id) => {
    return db('user_relationship')
        .where({ id })
        .first();
};

export const getFriendsByUserId = (userId) => {
    return db('user_relationship')
        .join('users as sender', 'user_relationship.sender_id', '=', 'sender.id')
        .join('users as receiver', 'user_relationship.receiver_id', '=', 'receiver.id')
        .select(
            'user_relationship.*',
            'sender.first_name as sender_first_name',
            'sender.last_name as sender_last_name',
            'sender.email as sender_email',
            'sender.image as sender_image',
            'receiver.first_name as receiver_first_name',
            'receiver.last_name as receiver_last_name',
            'receiver.email as receiver_email',
            'receiver.image as receiver_image'
        )
        .where(function () {
            this.where('user_relationship.sender_id', userId).orWhere('user_relationship.receiver_id', userId);
        })
        .andWhere('user_relationship.relationship_status_id', 2);
};

export const getPendingRequestsByUserId = (userId) => {
    return db('user_relationship')
        .join('users as u1', 'user_relationship.sender_id', 'u1.id')
        .join('users as u2', 'user_relationship.receiver_id', 'u2.id')
        .select(
            'user_relationship.id',
            'user_relationship.relationship_status_id',
            'user_relationship.created_at',
            'u1.first_name as sender_first_name',
            'u1.last_name as sender_last_name',
            'u1.image as sender_image',
            'u1.email as sender_email',
            'u1.id as sender_id')
        .where('user_relationship.receiver_id', userId)
        .andWhere('relationship_status_id', 1)
};

export const createFriendRequest = (relationship) => {
    return db('user_relationship').insert(relationship);
};

export const getExistingRelationship = (sender_id, receiver_id) => {
    return db('user_relationship')
        .where(function () {
            this.where({ sender_id, receiver_id }).orWhere({ sender_id: receiver_id, receiver_id: sender_id });
        })
        .andWhere(function () {
            this.where('relationship_status_id', 1).orWhere('relationship_status_id', 2);
        })
        .first();
};

export const updateUserRelationshipStatus = (id, statusId) => {
    return db('user_relationship')
        .where('id', id)
        .update({ relationship_status_id: statusId });
};

export const deleteFriendRequest = (id) => {
    return db('user_relationship').where('id', id).del();
};