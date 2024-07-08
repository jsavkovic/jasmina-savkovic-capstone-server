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
        { id: 1, borrower_id: 2, lender_id: 1, item_id: 1, start_date: '2024-07-01', end_date: '2024-07-10', borrow_status_id: 1 },
        { id: 2, borrower_id: 3, lender_id: 2, item_id: 2, start_date: '2024-07-02', end_date: '2024-07-11', borrow_status_id: 2 },
        { id: 3, borrower_id: 4, lender_id: 3, item_id: 3, start_date: '2024-07-03', end_date: '2024-07-12', borrow_status_id: 3 },
        { id: 4, borrower_id: 5, lender_id: 4, item_id: 4, start_date: '2024-07-04', end_date: '2024-07-13', borrow_status_id: 4 },
        { id: 5, borrower_id: 6, lender_id: 5, item_id: 5, start_date: '2024-07-05', end_date: '2024-07-14', borrow_status_id: 5 },
        { id: 6, borrower_id: 1, lender_id: 6, item_id: 6, start_date: '2024-07-06', end_date: '2024-07-15', borrow_status_id: 1 }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
