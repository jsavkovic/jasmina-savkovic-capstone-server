import knex from 'knex';
import knexConfig from '../knexfile.js';
import bcrypt from 'bcrypt';

const db = knex(knexConfig);

export const createUser = async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return db('users').insert({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: hashedPassword,
        created_user: knex.fn.now(),
        created_pswd: knex.fn.now(),
        created_user: knex.fn.now(),
        last_login: knex.fn.now()
    });
};

export const getUserByEmail = (email) => {
    return db('users').where('email', email).first();
};

export const updateLastLogin = (userId) => {
    return db('users')
        .where('id', userId)
        .update({ last_login: knex.fn.now() });
};