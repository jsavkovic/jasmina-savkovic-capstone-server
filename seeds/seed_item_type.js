/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('item_type').del();
    })
    .then(() => {
      return knex('item_type').insert([
        { id: 1, type: 'Nursery' },
        { id: 2, type: 'Feeding' },
        { id: 3, type: 'Diapering' },
        { id: 4, type: 'Gear & Travel' },
        { id: 5, type: 'Toys' },
        { id: 6, type: 'Clothing' },
        { id: 7, type: 'Health & Safety' },
        { id: 8, type: 'Bath' },
        { id: 9, type: 'Furniture' },
        { id: 10, type: 'Bedding' },
        { id: 11, type: 'Outdoor Gear' },
        { id: 12, type: 'Learning & Educational' }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
