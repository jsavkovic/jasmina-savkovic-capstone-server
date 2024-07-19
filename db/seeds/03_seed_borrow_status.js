/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('borrow_status').del();
    })
    .then(() => {
      return knex('borrow_status').insert([
        { id: 1, status: 'Requested' },
        { id: 2, status: 'Accepted' },
        { id: 3, status: 'Borrowed' },
        { id: 4, status: 'Declined' },
        { id: 5, status: 'Returned' },
        { id: 6, status: 'Cancelled' }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
