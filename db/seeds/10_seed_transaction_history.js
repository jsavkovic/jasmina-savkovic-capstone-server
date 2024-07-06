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
        { id: 1, borrow_request_id: 1, action_id: 1, actor_id: 1, target_id: 2 },
        { id: 2, borrow_request_id: 1, action_id: 2, actor_id: 2, target_id: 1 },
        { id: 3, borrow_request_id: 2, action_id: 1, actor_id: 3, target_id: 2 },
        { id: 4, borrow_request_id: 2, action_id: 2, actor_id: 2, target_id: 3 },
        { id: 5, borrow_request_id: 3, action_id: 1, actor_id: 4, target_id: 3 },
        { id: 6, borrow_request_id: 3, action_id: 2, actor_id: 3, target_id: 4 },
        { id: 7, borrow_request_id: 4, action_id: 1, actor_id: 5, target_id: 4 },
        { id: 8, borrow_request_id: 4, action_id: 2, actor_id: 4, target_id: 5 },
        { id: 9, borrow_request_id: 5, action_id: 1, actor_id: 6, target_id: 5 },
        { id: 10, borrow_request_id: 5, action_id: 2, actor_id: 5, target_id: 6 }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
