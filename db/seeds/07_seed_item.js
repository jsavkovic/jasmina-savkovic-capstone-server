/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  // Disable foreign key checks
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
      // Delete all entries in dependent tables first
      return knex('borrow_request').del();
    })
    .then(() => {
      // Delete all entries in the item table
      return knex('item').del();
    })
    .then(() => {
      // Enable foreign key checks
      return knex.raw('SET FOREIGN_KEY_CHECKS = 1');
    })
    .then(() => {
      // Inserts seed entries
      return knex('item').insert([
        { id: 1, name: 'Stroller', description: 'A comfortable stroller for babies', status_id: 1, type_id: 4, image: 'stroller.jpg', category_id: 1, user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 2, name: 'High Chair', description: 'A high chair for feeding', status_id: 1, type_id: 2, image: 'high_chair.jpg', category_id: 1, user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 3, name: 'Crib', description: 'A comfortable crib for babies', status_id: 1, type_id: 1, image: 'crib.jpg', category_id: 1, user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 4, name: 'Baby Carrier', description: 'An ergonomic baby carrier', status_id: 1, type_id: 4, image: 'baby_carrier.jpg', category_id: 1, user_id: 4, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 5, name: 'Playpen', description: 'A safe playpen for babies', status_id: 1, type_id: 9, image: 'playpen.jpg', category_id: 1, user_id: 5, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 6, name: 'Baby Swing', description: 'A soothing baby swing', status_id: 1, type_id: 12, image: 'baby_swing.jpg', category_id: 1, user_id: 6, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 7, name: 'Rocking Chair', description: 'A rocking chair for the nursery', status_id: 1, type_id: 9, image: 'rocking_chair.jpg', category_id: 1, user_id: 7, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 8, name: 'Bouncer', description: 'A fun bouncer for babies', status_id: 1, type_id: 12, image: 'bouncer.jpg', category_id: 1, user_id: 8, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 9, name: 'Educational Toys', description: 'Educational toys for learning', status_id: 1, type_id: 5, image: 'educational_toys.jpg', category_id: 2, user_id: 9, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 10, name: 'Books', description: 'Books for kids', status_id: 1, type_id: 12, image: 'books.jpg', category_id: 2, user_id: 10, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 11, name: 'Diaper Bag', description: 'A spacious diaper bag', status_id: 1, type_id: 3, image: 'diaper_bag.jpg', category_id: 2, user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 12, name: 'Bottle Warmer', description: 'A convenient bottle warmer', status_id: 1, type_id: 8, image: 'bottle_warmer.jpg', category_id: 1, user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 13, name: 'Changing Table', description: 'A sturdy changing table', status_id: 1, type_id: 1, image: 'changing_table.jpg', category_id: 1, user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 14, name: 'Safety Gates', description: 'Safety gates for baby-proofing', status_id: 1, type_id: 7, image: 'safety_gates.jpg', category_id: 1, user_id: 4, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 15, name: 'Outlet Covers', description: 'Outlet covers for baby-proofing', status_id: 1, type_id: 7, image: 'outlet_covers.jpg', category_id: 1, user_id: 5, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 16, name: 'Nursing Pillow', description: 'A comfortable nursing pillow', status_id: 1, type_id: 8, image: 'nursing_pillow.jpg', category_id: 1, user_id: 6, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 17, name: 'Bath Toys', description: 'Fun bath toys for babies', status_id: 1, type_id: 6, image: 'bath_toys.jpg', category_id: 2, user_id: 7, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 18, name: 'Baby Bath Seat', description: 'A safe bath seat for babies', status_id: 1, type_id: 6, image: 'baby_bath_seat.jpg', category_id: 1, user_id: 8, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 19, name: 'Bath Thermometer', description: 'A thermometer for bath water', status_id: 1, type_id: 6, image: 'bath_thermometer.jpg', category_id: 1, user_id: 9, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 20, name: 'Nursing Cover', description: 'A cover for nursing in public', status_id: 1, type_id: 8, image: 'nursing_cover.jpg', category_id: 1, user_id: 10, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 21, name: 'Baby Monitor', description: 'A baby monitor for safety', status_id: 1, type_id: 7, image: 'baby_monitor.jpg', category_id: 1, user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 22, name: 'Rocking Horse', description: 'A fun rocking horse', status_id: 1, type_id: 5, image: 'rocking_horse.jpg', category_id: 1, user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 23, name: 'Puzzle Set', description: 'A set of educational puzzles', status_id: 1, type_id: 12, image: 'puzzle_set.jpg', category_id: 2, user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 24, name: 'Flashcards', description: 'Educational flashcards', status_id: 1, type_id: 12, image: 'flashcards.jpg', category_id: 2, user_id: 4, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 25, name: 'Play Mat', description: 'A soft play mat for babies', status_id: 1, type_id: 5, image: 'play_mat.jpg', category_id: 1, user_id: 5, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 26, name: 'Hiking Carrier', description: 'A hiking carrier for outdoor activities', status_id: 1, type_id: 11, image: 'hiking_carrier.jpg', category_id: 1, user_id: 6, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 27, name: 'Car Seat', description: 'A car seat for safety', status_id: 1, type_id: 7, image: 'car_seat.jpg', category_id: 1, user_id: 7, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 28, name: 'Snow Suit', description: 'A snow suit for winter (size 12 months)', status_id: 1, type_id: 6, image: 'snow_suit.jpg', category_id: 1, user_id: 8, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 29, name: 'Clothes', description: 'Baby clothes (size 6-12 months)', status_id: 1, type_id: 6, image: 'baby_clothes.jpg', category_id: 2, user_id: 9, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 30, name: 'Shoes', description: 'Baby shoes (size 3)', status_id: 1, type_id: 6, image: 'baby_shoes.jpg', category_id: 2, user_id: 10, created_at: knex.fn.now(), updated_at: knex.fn.now() }
      ]);
    });
};
