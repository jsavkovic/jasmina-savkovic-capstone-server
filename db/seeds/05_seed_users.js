/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('users').insert([
        { id: 1, first_name: 'Alice', last_name: 'Johnson', email: 'alice.johnson@example.com', password: 'password1', image: 'alice.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 2, first_name: 'Bob', last_name: 'Smith', email: 'bob.smith@example.com', password: 'password2', image: 'bob.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 3, first_name: 'Charlie', last_name: 'Davis', email: 'charlie.davis@example.com', password: 'password3', image: 'charlie.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 4, first_name: 'Diana', last_name: 'Garcia', email: 'diana.garcia@example.com', password: 'password4', image: 'diana.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 5, first_name: 'Edward', last_name: 'Martinez', email: 'edward.martinez@example.com', password: 'password5', image: 'edward.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 6, first_name: 'Fiona', last_name: 'Hernandez', email: 'fiona.hernandez@example.com', password: 'password6', image: 'fiona.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 7, first_name: 'George', last_name: 'Lopez', email: 'george.lopez@example.com', password: 'password7', image: 'george.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 8, first_name: 'Hannah', last_name: 'Wilson', email: 'hannah.wilson@example.com', password: 'password8', image: 'hannah.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 9, first_name: 'Ian', last_name: 'Clark', email: 'ian.clark@example.com', password: 'password9', image: 'ian.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 10, first_name: 'Julia', last_name: 'Young', email: 'julia.young@example.com', password: 'password10', image: 'julia.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
