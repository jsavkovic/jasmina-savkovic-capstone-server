/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => knex('users').del())
    .then(() => knex('users').insert([
      { id: 1, first_name: 'Emily', last_name: 'Brown', email: 'emily.brown@example.com', password: 'password1', image: 'user_1.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
      { id: 2, first_name: 'Sophia', last_name: 'Johnson', email: 'sophia.johnson@example.com', password: 'password2', image: 'user_2.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
      { id: 3, first_name: 'James', last_name: 'Williams', email: 'james.williams@example.com', password: 'password3', image: 'user_3.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
      { id: 4, first_name: 'Olivia', last_name: 'Jones', email: 'olivia.jones@example.com', password: 'password4', image: 'user_4.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
      { id: 5, first_name: 'Michael', last_name: 'Davis', email: 'michael.davis@example.com', password: 'password5', image: 'user_5.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
      { id: 6, first_name: 'Emma', last_name: 'Martinez', email: 'emma.martinez@example.com', password: 'password6', image: 'user_6.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
      { id: 7, first_name: 'David', last_name: 'Garcia', email: 'david.garcia@example.com', password: 'password7', image: 'user_7.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
      { id: 8, first_name: 'Daniel', last_name: 'Rodriguez', email: 'daniel.rodriguez@example.com', password: 'password8', image: 'user_8.png', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() }
    ]))
    .then(() => knex.raw('SET FOREIGN_KEY_CHECKS = 1'));
};
