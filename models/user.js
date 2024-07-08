import knex from 'knex';
import knexConfig from '../knexfile.js';
import bcrypt from 'bcrypt';

const db = knex(knexConfig);

export const createUser = async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    console.log("Inserting user into the database:", user.email);
    return db('users').insert({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: hashedPassword,
        created_user: db.fn.now(),
        created_pswd: db.fn.now(),
        last_login: db.fn.now(),
        created_at: db.fn.now(),
        updated_at: db.fn.now()
    });
};

export const getUserByEmail = (email) => {
    console.log("Fetching user by email:", email);
    return db('users').where('email', email).first();
};

export const getUserById = (id) => {
    return db('users').where('id', id).first();
};

export const updateLastLogin = (userId) => {
    console.log("Updating last login for user ID:", userId);
    return db('users')
        .where({ id: userId })
        .update({ last_login: db.fn.now() });
};

export const getItemsByUser = (userId) => {
    return db('item')
        .where('item.user_id', userId)
        .select('item.*');
};
