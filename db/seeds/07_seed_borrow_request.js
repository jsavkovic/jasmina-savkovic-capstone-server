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
        // Pending (start and end in the future)
        { id: 1, borrower_id: 2, lender_id: 1, item_id: 1, start_date: '2024-07-20', end_date: '2024-07-30', borrow_status_id: 1 },
        { id: 2, borrower_id: 3, lender_id: 1, item_id: 2, start_date: '2024-07-21', end_date: '2024-07-31', borrow_status_id: 1 },
        { id: 3, borrower_id: 1, lender_id: 2, item_id: 3, start_date: '2024-07-22', end_date: '2024-08-01', borrow_status_id: 1 },
        { id: 4, borrower_id: 5, lender_id: 1, item_id: 4, start_date: '2024-07-23', end_date: '2024-08-02', borrow_status_id: 1 },
        { id: 5, borrower_id: 1, lender_id: 3, item_id: 5, start_date: '2024-07-24', end_date: '2024-08-03', borrow_status_id: 1 },

        // Accepted (start and end after today)
        { id: 6, borrower_id: 2, lender_id: 1, item_id: 6, start_date: '2024-07-16', end_date: '2024-07-26', borrow_status_id: 2 },
        { id: 7, borrower_id: 3, lender_id: 4, item_id: 7, start_date: '2024-07-17', end_date: '2024-07-27', borrow_status_id: 2 },
        { id: 8, borrower_id: 4, lender_id: 1, item_id: 8, start_date: '2024-07-18', end_date: '2024-07-28', borrow_status_id: 2 },
        { id: 9, borrower_id: 5, lender_id: 5, item_id: 9, start_date: '2024-07-19', end_date: '2024-07-29', borrow_status_id: 2 },
        { id: 10, borrower_id: 1, lender_id: 5, item_id: 10, start_date: '2024-07-20', end_date: '2024-07-30', borrow_status_id: 2 },

        // Borrowed (start before today and end varies)
        { id: 11, borrower_id: 1, lender_id: 6, item_id: 11, start_date: '2024-07-01', end_date: '2024-07-10', borrow_status_id: 3 }, // overdue
        { id: 12, borrower_id: 2, lender_id: 6, item_id: 12, start_date: '2024-07-05', end_date: '2024-07-14', borrow_status_id: 3 }, // due today
        { id: 13, borrower_id: 3, lender_id: 7, item_id: 13, start_date: '2024-07-07', end_date: '2024-07-15', borrow_status_id: 3 }, // due tomorrow
        { id: 14, borrower_id: 4, lender_id: 1, item_id: 14, start_date: '2024-07-08', end_date: '2024-07-16', borrow_status_id: 3 }, // due in 2 days
        { id: 15, borrower_id: 1, lender_id: 8, item_id: 15, start_date: '2024-07-09', end_date: '2024-07-20', borrow_status_id: 3 }, // due later
        { id: 16, borrower_id: 6, lender_id: 1, item_id: 16, start_date: '2024-07-10', end_date: '2024-07-17', borrow_status_id: 3 }, // due later
        { id: 17, borrower_id: 5, lender_id: 9, item_id: 17, start_date: '2024-07-03', end_date: '2024-07-13', borrow_status_id: 3 }, // overdue
        { id: 18, borrower_id: 2, lender_id: 9, item_id: 18, start_date: '2024-07-06', end_date: '2024-07-18', borrow_status_id: 3 }, // due in 4 days
        { id: 19, borrower_id: 1, lender_id: 10, item_id: 19, start_date: '2024-07-04', end_date: '2024-07-14', borrow_status_id: 3 }, // due today
        { id: 20, borrower_id: 4, lender_id: 1, item_id: 20, start_date: '2024-07-02', end_date: '2024-07-13', borrow_status_id: 3 }, // overdue

        // Returned (start and end in the past)
        { id: 21, borrower_id: 5, lender_id: 1, item_id: 21, start_date: '2024-06-01', end_date: '2024-07-10', borrow_status_id: 4 },
        { id: 22, borrower_id: 6, lender_id: 1, item_id: 22, start_date: '2024-06-02', end_date: '2024-07-12', borrow_status_id: 4 },
        { id: 23, borrower_id: 1, lender_id: 2, item_id: 23, start_date: '2024-06-03', end_date: '2024-07-08', borrow_status_id: 4 },
        { id: 24, borrower_id: 2, lender_id: 3, item_id: 24, start_date: '2024-06-04', end_date: '2024-07-09', borrow_status_id: 4 },
        { id: 25, borrower_id: 3, lender_id: 2, item_id: 25, start_date: '2024-06-05', end_date: '2024-07-11', borrow_status_id: 4 },
        { id: 26, borrower_id: 4, lender_id: 3, item_id: 26, start_date: '2024-06-06', end_date: '2024-07-10', borrow_status_id: 4 },
        { id: 27, borrower_id: 5, lender_id: 4, item_id: 27, start_date: '2024-06-07', end_date: '2024-07-12', borrow_status_id: 4 },
        { id: 28, borrower_id: 6, lender_id: 4, item_id: 28, start_date: '2024-06-08', end_date: '2024-07-13', borrow_status_id: 4 },
        { id: 29, borrower_id: 1, lender_id: 5, item_id: 29, start_date: '2024-06-09', end_date: '2024-07-14', borrow_status_id: 4 },
        { id: 30, borrower_id: 2, lender_id: 5, item_id: 30, start_date: '2024-06-10', end_date: '2024-07-15', borrow_status_id: 4 },

        // Declined (start and end vary)
        { id: 31, borrower_id: 3, lender_id: 10, item_id: 31, start_date: '2024-06-11', end_date: '2024-07-16', borrow_status_id: 5 },
        { id: 32, borrower_id: 4, lender_id: 9, item_id: 32, start_date: '2024-06-12', end_date: '2024-07-17', borrow_status_id: 5 },
        { id: 33, borrower_id: 5, lender_id: 8, item_id: 33, start_date: '2024-06-13', end_date: '2024-07-18', borrow_status_id: 5 },
        { id: 34, borrower_id: 6, lender_id: 7, item_id: 34, start_date: '2024-06-14', end_date: '2024-07-19', borrow_status_id: 5 },
        { id: 35, borrower_id: 1, lender_id: 6, item_id: 35, start_date: '2024-06-15', end_date: '2024-07-20', borrow_status_id: 5 },
        { id: 36, borrower_id: 2, lender_id: 5, item_id: 36, start_date: '2024-06-16', end_date: '2024-07-21', borrow_status_id: 5 },
        { id: 37, borrower_id: 3, lender_id: 4, item_id: 37, start_date: '2024-06-17', end_date: '2024-07-22', borrow_status_id: 5 },
        { id: 38, borrower_id: 4, lender_id: 3, item_id: 38, start_date: '2024-06-18', end_date: '2024-07-23', borrow_status_id: 5 },
        { id: 39, borrower_id: 5, lender_id: 2, item_id: 39, start_date: '2024-06-19', end_date: '2024-07-24', borrow_status_id: 5 },
        { id: 40, borrower_id: 6, lender_id: 1, item_id: 40, start_date: '2024-06-20', end_date: '2024-07-25', borrow_status_id: 5 },

        // More Borrowed (with varied end dates)
        { id: 41, borrower_id: 1, lender_id: 10, item_id: 41, start_date: '2024-07-01', end_date: '2024-07-12', borrow_status_id: 3 }, // overdue
        { id: 42, borrower_id: 2, lender_id: 9, item_id: 42, start_date: '2024-07-05', end_date: '2024-07-14', borrow_status_id: 3 }, // due today
        { id: 43, borrower_id: 3, lender_id: 8, item_id: 43, start_date: '2024-07-07', end_date: '2024-07-15', borrow_status_id: 3 }, // due tomorrow
        { id: 44, borrower_id: 4, lender_id: 7, item_id: 44, start_date: '2024-07-08', end_date: '2024-07-16', borrow_status_id: 3 }, // due in 2 days
        { id: 45, borrower_id: 5, lender_id: 6, item_id: 45, start_date: '2024-07-09', end_date: '2024-07-20', borrow_status_id: 3 }, // due later
        { id: 46, borrower_id: 6, lender_id: 5, item_id: 46, start_date: '2024-07-10', end_date: '2024-07-17', borrow_status_id: 3 }, // due later
        { id: 47, borrower_id: 1, lender_id: 4, item_id: 47, start_date: '2024-07-03', end_date: '2024-07-13', borrow_status_id: 3 }, // overdue
        { id: 48, borrower_id: 2, lender_id: 3, item_id: 48, start_date: '2024-07-06', end_date: '2024-07-18', borrow_status_id: 3 }, // due in 4 days
        { id: 49, borrower_id: 3, lender_id: 2, item_id: 49, start_date: '2024-07-04', end_date: '2024-07-14', borrow_status_id: 3 }, // due today
        { id: 50, borrower_id: 4, lender_id: 1, item_id: 50, start_date: '2024-07-02', end_date: '2024-07-13', borrow_status_id: 3 } // overdue
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
}
