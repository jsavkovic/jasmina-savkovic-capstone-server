/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      return knex('user_relationship').del();
    })
    .then(() => {
      return knex('user_relationship').insert([
        { id: 1, sender_id: 1, receiver_id: 2, relationship_status_id: 2 },
        { id: 2, sender_id: 2, receiver_id: 3, relationship_status_id: 2 },
        { id: 3, sender_id: 3, receiver_id: 4, relationship_status_id: 2 },
        { id: 4, sender_id: 4, receiver_id: 5, relationship_status_id: 1 },
        { id: 5, sender_id: 5, receiver_id: 6, relationship_status_id: 2 },
        { id: 6, sender_id: 6, receiver_id: 7, relationship_status_id: 1 },
        { id: 7, sender_id: 7, receiver_id: 8, relationship_status_id: 2 },
        { id: 8, sender_id: 8, receiver_id: 9, relationship_status_id: 1 },
        { id: 9, sender_id: 9, receiver_id: 10, relationship_status_id: 2 },
        { id: 10, sender_id: 10, receiver_id: 1, relationship_status_id: 1 },
        { id: 11, sender_id: 2, receiver_id: 4, relationship_status_id: 2 },
        { id: 12, sender_id: 3, receiver_id: 5, relationship_status_id: 1 },
        { id: 13, sender_id: 4, receiver_id: 6, relationship_status_id: 2 },
        { id: 14, sender_id: 5, receiver_id: 7, relationship_status_id: 1 },
        { id: 15, sender_id: 6, receiver_id: 8, relationship_status_id: 2 },
        { id: 16, sender_id: 7, receiver_id: 9, relationship_status_id: 1 },
        { id: 17, sender_id: 8, receiver_id: 10, relationship_status_id: 2 },
        { id: 18, sender_id: 9, receiver_id: 1, relationship_status_id: 1 },
        { id: 19, sender_id: 10, receiver_id: 2, relationship_status_id: 2 },
        { id: 20, sender_id: 1, receiver_id: 3, relationship_status_id: 1 },
        { id: 21, sender_id: 2, receiver_id: 5, relationship_status_id: 2 },
        { id: 22, sender_id: 3, receiver_id: 6, relationship_status_id: 1 },
        { id: 23, sender_id: 4, receiver_id: 7, relationship_status_id: 2 },
        { id: 24, sender_id: 5, receiver_id: 8, relationship_status_id: 1 },
        { id: 25, sender_id: 6, receiver_id: 9, relationship_status_id: 2 },
        { id: 26, sender_id: 7, receiver_id: 10, relationship_status_id: 1 },
        { id: 27, sender_id: 8, receiver_id: 1, relationship_status_id: 2 },
        { id: 28, sender_id: 9, receiver_id: 2, relationship_status_id: 1 },
        { id: 29, sender_id: 1, receiver_id: 3, relationship_status_id: 2 },
        { id: 30, sender_id: 1, receiver_id: 4, relationship_status_id: 1 }
      ]);
    })
    .then(() => {
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    });
};
