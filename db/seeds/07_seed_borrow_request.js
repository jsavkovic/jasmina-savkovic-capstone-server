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
        // Pending requests for user 1 as borrower
        { id: 1, borrower_id: 1, lender_id: 2, item_id: 12, start_date: '2024-07-21', end_date: '2024-07-31', borrow_status_id: 1 },
        { id: 2, borrower_id: 1, lender_id: 3, item_id: 13, start_date: '2024-07-22', end_date: '2024-08-01', borrow_status_id: 1 },

        // Accepted requests for user 1 as borrower
        { id: 3, borrower_id: 1, lender_id: 4, item_id: 14, start_date: '2024-07-18', end_date: '2024-07-28', borrow_status_id: 2 },

        // Borrowed requests for user 1 as borrower
        { id: 4, borrower_id: 1, lender_id: 5, item_id: 15, start_date: '2024-07-09', end_date: '2024-07-27', borrow_status_id: 3 }, // due in 10 days
        { id: 5, borrower_id: 1, lender_id: 6, item_id: 16, start_date: '2024-07-15', end_date: '2024-07-19', borrow_status_id: 3 }, // due in 2 days
        { id: 6, borrower_id: 1, lender_id: 7, item_id: 17, start_date: '2024-07-07', end_date: '2024-07-17', borrow_status_id: 3 }, // due today
        { id: 7, borrower_id: 1, lender_id: 8, item_id: 18, start_date: '2024-07-01', end_date: '2024-07-10', borrow_status_id: 3 }, // overdue

        // Returned request for user 1 as borrower
        { id: 8, borrower_id: 1, lender_id: 9, item_id: 19, start_date: '2024-06-01', end_date: '2024-07-10', borrow_status_id: 4 },

        // Declined request for user 1 as borrower
        { id: 9, borrower_id: 1, lender_id: 10, item_id: 20, start_date: '2024-06-01', end_date: '2024-07-15', borrow_status_id: 5 },

        // Pending requests for user 1 as lender
        { id: 10, borrower_id: 2, lender_id: 1, item_id: 1, start_date: '2024-07-20', end_date: '2024-07-30', borrow_status_id: 1 },
        { id: 11, borrower_id: 3, lender_id: 1, item_id: 2, start_date: '2024-07-21', end_date: '2024-07-31', borrow_status_id: 1 },
        { id: 12, borrower_id: 4, lender_id: 1, item_id: 3, start_date: '2024-07-22', end_date: '2024-08-01', borrow_status_id: 1 },

        // Accepted requests for user 1 as lender
        { id: 13, borrower_id: 5, lender_id: 1, item_id: 4, start_date: '2024-07-18', end_date: '2024-07-28', borrow_status_id: 2 },
        { id: 14, borrower_id: 6, lender_id: 1, item_id: 5, start_date: '2024-07-19', end_date: '2024-07-29', borrow_status_id: 2 },

        // Borrowed requests for user 1 as lender
        { id: 15, borrower_id: 7, lender_id: 1, item_id: 6, start_date: '2024-07-15', end_date: '2024-07-19', borrow_status_id: 3 }, // due in 2 days
        { id: 16, borrower_id: 8, lender_id: 1, item_id: 7, start_date: '2024-07-07', end_date: '2024-07-17', borrow_status_id: 3 }, // due today

        // Picked up request for user 1 as lender
        { id: 17, borrower_id: 9, lender_id: 1, item_id: 8, start_date: '2024-07-16', end_date: '2024-07-26', borrow_status_id: 2 },

        // Returned request for user 1 as lender
        { id: 18, borrower_id: 10, lender_id: 1, item_id: 9, start_date: '2024-06-01', end_date: '2024-07-10', borrow_status_id: 4 },

        // Mix of other borrow requests
        { id: 19, borrower_id: 2, lender_id: 5, item_id: 21, start_date: '2024-07-20', end_date: '2024-07-30', borrow_status_id: 1 },
        { id: 20, borrower_id: 3, lender_id: 5, item_id: 22, start_date: '2024-07-21', end_date: '2024-07-31', borrow_status_id: 1 },
        { id: 21, borrower_id: 4, lender_id: 5, item_id: 23, start_date: '2024-07-22', end_date: '2024-08-01', borrow_status_id: 1 },
        { id: 22, borrower_id: 5, lender_id: 4, item_id: 24, start_date: '2024-07-18', end_date: '2024-07-28', borrow_status_id: 2 },
        { id: 23, borrower_id: 6, lender_id: 4, item_id: 25, start_date: '2024-07-19', end_date: '2024-07-29', borrow_status_id: 2 },
        { id: 24, borrower_id: 7, lender_id: 4, item_id: 26, start_date: '2024-07-15', end_date: '2024-07-19', borrow_status_id: 3 }, // due in 2 days
        { id: 25, borrower_id: 8, lender_id: 4, item_id: 27, start_date: '2024-07-07', end_date: '2024-07-17', borrow_status_id: 3 }, // due today
        { id: 26, borrower_id: 9, lender_id: 3, item_id: 28, start_date: '2024-06-01', end_date: '2024-07-10', borrow_status_id: 4 },
        { id: 27, borrower_id: 10, lender_id: 3, item_id: 29, start_date: '2024-06-01', end_date: '2024-07-15', borrow_status_id: 5 },
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
}
