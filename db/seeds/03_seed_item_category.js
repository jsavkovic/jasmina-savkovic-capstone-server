/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('item_category').del();
    })
    .then(() => {
      return knex('item_category').insert([
        { id: 1, category: 'lend' },
        { id: 2, category: 'gift' }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
