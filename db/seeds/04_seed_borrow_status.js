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
        { id: 1, status: 'requested' },
        { id: 2, status: 'accepted' },
        { id: 3, status: 'borrowed' },
        { id: 4, status: 'declined' },
        { id: 5, status: 'returned' },
        { id: 6, status: 'cancelled' }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
