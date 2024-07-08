/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('relationship_status').del();
    })
    .then(() => {
      return knex('relationship_status').insert([
        { id: 1, status: 'pending' },
        { id: 2, status: 'accepted' },
        { id: 3, status: 'declined' },
        { id: 4, status: 'cancelled' }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
