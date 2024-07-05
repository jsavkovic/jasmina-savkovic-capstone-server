/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('borrow_request').del();
    })
    .then(() => {
      return knex('borrow_request').insert([
        { id: 1, borrower_id: 2, lender_id: 1, item_id: 1, timestamp: knex.fn.now(), start_date: knex.fn.now(), end_date: knex.fn.now(), borrow_status_id: 1 },
        { id: 2, borrower_id: 3, lender_id: 2, item_id: 2, timestamp: knex.fn.now(), start_date: knex.fn.now(), end_date: knex.fn.now(), borrow_status_id: 2 },
        { id: 3, borrower_id: 4, lender_id: 3, item_id: 3, timestamp: knex.fn.now(), start_date: knex.fn.now(), end_date: knex.fn.now(), borrow_status_id: 3 },
        { id: 4, borrower_id: 5, lender_id: 4, item_id: 4, timestamp: knex.fn.now(), start_date: knex.fn.now(), end_date: knex.fn.now(), borrow_status_id: 4 },
        { id: 5, borrower_id: 6, lender_id: 5, item_id: 5, timestamp: knex.fn.now(), start_date: knex.fn.now(), end_date: knex.fn.now(), borrow_status_id: 5 },
        { id: 6, borrower_id: 1, lender_id: 6, item_id: 6, timestamp: knex.fn.now(), start_date: knex.fn.now(), end_date: knex.fn.now(), borrow_status_id: 1 }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
