/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('item_status').del();
    })
    .then(() => {
      return knex('item_status').insert([
        { id: 1, status: 'Listed' },
        { id: 2, status: 'Inactive' }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
