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
        { id: 1, first_name: 'Luna', last_name: 'Lovegood', email: 'luna.lovegood@example.com', password: 'password1', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 2, first_name: 'Harry', last_name: 'Potter', email: 'harry.potter@example.com', password: 'password2', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 3, first_name: 'Hermione', last_name: 'Granger', email: 'hermione.granger@example.com', password: 'password3', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 4, first_name: 'Ron', last_name: 'Weasley', email: 'ron.weasley@example.com', password: 'password4', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 5, first_name: 'Ginny', last_name: 'Weasley', email: 'ginny.weasley@example.com', password: 'password5', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 6, first_name: 'Neville', last_name: 'Longbottom', email: 'neville.longbottom@example.com', password: 'password6', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 7, first_name: 'Draco', last_name: 'Malfoy', email: 'draco.malfoy@example.com', password: 'password7', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 8, first_name: 'Cho', last_name: 'Chang', email: 'cho.chang@example.com', password: 'password8', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 9, first_name: 'Cedric', last_name: 'Diggory', email: 'cedric.diggory@example.com', password: 'password9', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() },
        { id: 10, first_name: 'Fleur', last_name: 'Delacour', email: 'fleur.delacour@example.com', password: 'password10', created_user: knex.fn.now(), created_pswd: knex.fn.now(), last_login: knex.fn.now() }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
