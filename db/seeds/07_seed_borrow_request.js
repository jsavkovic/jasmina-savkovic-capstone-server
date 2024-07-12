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
        { id: 6, borrower_id: 1, lender_id: 6, item_id: 6, start_date: '2024-07-06', end_date: '2024-07-15', borrow_status_id: 1 },
        { id: 7, borrower_id: 2, lender_id: 3, item_id: 7, start_date: '2024-07-07', end_date: '2024-07-16', borrow_status_id: 2 },
        { id: 8, borrower_id: 3, lender_id: 4, item_id: 8, start_date: '2024-07-08', end_date: '2024-07-17', borrow_status_id: 3 },
        { id: 9, borrower_id: 4, lender_id: 5, item_id: 9, start_date: '2024-07-09', end_date: '2024-07-18', borrow_status_id: 4 },
        { id: 10, borrower_id: 5, lender_id: 6, item_id: 10, start_date: '2024-07-10', end_date: '2024-07-19', borrow_status_id: 5 },
        { id: 11, borrower_id: 6, lender_id: 1, item_id: 11, start_date: '2024-07-11', end_date: '2024-07-20', borrow_status_id: 1 },
        { id: 12, borrower_id: 1, lender_id: 2, item_id: 12, start_date: '2024-07-12', end_date: '2024-07-21', borrow_status_id: 2 },
        { id: 13, borrower_id: 2, lender_id: 3, item_id: 13, start_date: '2024-07-13', end_date: '2024-07-22', borrow_status_id: 3 },
        { id: 14, borrower_id: 3, lender_id: 4, item_id: 14, start_date: '2024-07-14', end_date: '2024-07-23', borrow_status_id: 4 },
        { id: 15, borrower_id: 4, lender_id: 5, item_id: 15, start_date: '2024-07-15', end_date: '2024-07-24', borrow_status_id: 5 },
        { id: 16, borrower_id: 5, lender_id: 6, item_id: 16, start_date: '2024-07-16', end_date: '2024-07-25', borrow_status_id: 1 },
        { id: 17, borrower_id: 6, lender_id: 1, item_id: 17, start_date: '2024-07-17', end_date: '2024-07-26', borrow_status_id: 2 },
        { id: 18, borrower_id: 1, lender_id: 2, item_id: 18, start_date: '2024-07-18', end_date: '2024-07-27', borrow_status_id: 3 },
        { id: 19, borrower_id: 2, lender_id: 3, item_id: 19, start_date: '2024-07-19', end_date: '2024-07-28', borrow_status_id: 4 },
        { id: 20, borrower_id: 3, lender_id: 4, item_id: 20, start_date: '2024-07-20', end_date: '2024-07-29', borrow_status_id: 5 }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
