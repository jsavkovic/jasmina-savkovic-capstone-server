/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('transaction_history').del();
    })
    .then(() => {
      return knex('transaction_history').insert([
        { id: 1, borrow_request_id: 1, action_id: 1, actor_id: 1, target_id: 2, timestamp: knex.fn.now() },
        { id: 2, borrow_request_id: 1, action_id: 2, actor_id: 2, target_id: 1, timestamp: knex.fn.now() },
        { id: 3, borrow_request_id: 2, action_id: 1, actor_id: 3, target_id: 2, timestamp: knex.fn.now() },
        { id: 4, borrow_request_id: 2, action_id: 2, actor_id: 2, target_id: 3, timestamp: knex.fn.now() },
        { id: 5, borrow_request_id: 3, action_id: 1, actor_id: 4, target_id: 3, timestamp: knex.fn.now() },
        { id: 6, borrow_request_id: 3, action_id: 2, actor_id: 3, target_id: 4, timestamp: knex.fn.now() },
        { id: 7, borrow_request_id: 4, action_id: 1, actor_id: 5, target_id: 4, timestamp: knex.fn.now() },
        { id: 8, borrow_request_id: 4, action_id: 2, actor_id: 4, target_id: 5, timestamp: knex.fn.now() },
        { id: 9, borrow_request_id: 5, action_id: 1, actor_id: 6, target_id: 5, timestamp: knex.fn.now() },
        { id: 10, borrow_request_id: 5, action_id: 2, actor_id: 5, target_id: 6, timestamp: knex.fn.now() }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
