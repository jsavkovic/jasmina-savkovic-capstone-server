/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('user_relationship').del();
    })
    .then(() => {
      return knex('user_relationship').insert([
        // Friends
        { id: 1, sender_id: 1, receiver_id: 2, relationship_status_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 2, sender_id: 1, receiver_id: 3, relationship_status_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 3, sender_id: 1, receiver_id: 4, relationship_status_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 4, sender_id: 1, receiver_id: 5, relationship_status_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        // Pending Requests
        { id: 5, sender_id: 6, receiver_id: 1, relationship_status_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 6, sender_id: 7, receiver_id: 1, relationship_status_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 7, sender_id: 8, receiver_id: 1, relationship_status_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
