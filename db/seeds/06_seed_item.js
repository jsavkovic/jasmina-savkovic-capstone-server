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
        { id: 1, name: 'Stroller', description: 'A comfortable stroller for babies. It provides great comfort and safety. Ideal for daily walks.', status_id: 1, type_id: 4, image: 'stroller.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 2, name: 'High Chair', description: 'A high chair for feeding. Adjustable and easy to clean. Perfect for mealtime.', status_id: 1, type_id: 2, image: 'high_chair.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 3, name: 'Crib', description: 'A comfortable crib for babies. Provides a safe and cozy sleeping environment. Sturdy and durable.', status_id: 1, type_id: 1, image: 'crib.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 4, name: 'Baby Carrier', description: 'An ergonomic baby carrier. Offers excellent support for both baby and parent. Perfect for on-the-go.', status_id: 1, type_id: 4, image: 'baby_carrier.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 5, name: 'Playpen', description: 'A safe playpen for babies. Spacious and secure. Great for playtime.', status_id: 1, type_id: 9, image: 'playpen.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 6, name: 'Baby Swing', description: 'A soothing baby swing. Calming motions help the baby sleep. Comes with various speed settings.', status_id: 1, type_id: 12, image: 'baby_swing.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 7, name: 'Rocking Chair', description: 'A rocking chair for the nursery. Provides comfort and relaxation. Made with high-quality materials.', status_id: 1, type_id: 9, image: 'rocking_chair.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 8, name: 'Bouncer', description: 'A fun bouncer for babies. Keeps the baby entertained. Safe and comfortable design.', status_id: 1, type_id: 12, image: 'bouncer.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 9, name: 'Educational Toys', description: 'Educational toys for learning. Stimulate cognitive development. Fun and interactive.', status_id: 1, type_id: 5, image: 'educational_toys.jpg', user_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 10, name: 'Books', description: 'Books for kids. Various genres to spark imagination. Perfect for bedtime stories.', status_id: 1, type_id: 12, image: 'books.jpg', user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 12, name: 'Bottle Warmer', description: 'A convenient bottle warmer. Heats bottles quickly and evenly. Compact and easy to use.', status_id: 1, type_id: 8, image: 'bottle_warmer.jpg', user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 13, name: 'Changing Table', description: 'A sturdy changing table. Includes ample storage space. Essential for diaper changes.', status_id: 1, type_id: 1, image: 'changing_table.jpg', user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 14, name: 'Safety Gates', description: 'Safety gates for baby-proofing. Prevents access to hazardous areas. Easy to install.', status_id: 1, type_id: 7, image: 'safety_gates.jpg', user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 16, name: 'Nursing Pillow', description: 'A comfortable nursing pillow. Supports baby during feeding. Soft and easy to clean.', status_id: 1, type_id: 8, image: 'nursing_pillow.jpg', user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 18, name: 'Baby Bath Seat', description: 'A safe bath seat for babies. Provides support during bath time. Non-slip and secure.', status_id: 1, type_id: 6, image: 'baby_bath_seat.jpg', user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 21, name: 'Baby Monitor', description: 'A baby monitor for safety. Ensures constant supervision. Features clear audio and video.', status_id: 1, type_id: 7, image: 'baby_monitor.jpg', user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 22, name: 'Rocking Horse', description: 'A fun rocking horse. Encourages imaginative play. Durable and safe.', status_id: 1, type_id: 5, image: 'rocking_horse.jpg', user_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 23, name: 'Puzzle Set', description: 'A set of educational puzzles. Helps develop problem-solving skills. Fun and challenging.', status_id: 1, type_id: 12, image: 'puzzle_set.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 24, name: 'Play Mat', description: 'A soft play mat for babies. Provides a safe and comfortable play area. Easy to clean.', status_id: 1, type_id: 5, image: 'play_mat.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 26, name: 'Hiking Carrier', description: 'A hiking carrier for outdoor activities. Comfortable for both parent and baby. Sturdy and safe.', status_id: 1, type_id: 11, image: 'hiking_carrier.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 27, name: 'Car Seat', description: 'A car seat for safety. Ensures secure travel for babies. Easy to install.', status_id: 1, type_id: 7, image: 'car_seat.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 28, name: 'Snow Suit 0-3 months', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 0-3 months.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 29, name: 'Snow Suit 3-6 months', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 3-6 months.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 30, name: 'Snow Suit 6-9 months', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 6-9 months.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 31, name: 'Snow Suit 9-12 months', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 9-12 months.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 32, name: 'Snow Suit 12-18 months', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 12-18 months.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 33, name: 'Snow Suit 18-24 months', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 18-24 months.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 34, name: 'Snow Suit 2T', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 2T.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 35, name: 'Snow Suit 3T', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 3T.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 36, name: 'Snow Suit 4T', description: 'A snow suit for winter. Keeps the baby warm and cozy. Size 4T.', status_id: 1, type_id: 6, image: 'snow_suit.jpg', user_id: 3, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 37, name: 'Stroller', description: 'A comfortable stroller for babies. It provides great comfort and safety. Ideal for daily walks.', status_id: 1, type_id: 4, image: 'stroller.jpg', user_id: 4, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 38, name: 'High Chair', description: 'A high chair for feeding. Adjustable and easy to clean. Perfect for mealtime.', status_id: 1, type_id: 2, image: 'high_chair.jpg', user_id: 4, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 39, name: 'Crib', description: 'A comfortable crib for babies. Provides a safe and cozy sleeping environment. Sturdy and durable.', status_id: 1, type_id: 1, image: 'crib.jpg', user_id: 4, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 40, name: 'Baby Carrier', description: 'An ergonomic baby carrier. Offers excellent support for both baby and parent. Perfect for on-the-go.', status_id: 1, type_id: 4, image: 'baby_carrier.jpg', user_id: 4, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 41, name: 'Playpen', description: 'A safe playpen for babies. Spacious and secure. Great for playtime.', status_id: 1, type_id: 9, image: 'playpen.jpg', user_id: 5, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 42, name: 'Baby Swing', description: 'A soothing baby swing. Calming motions help the baby sleep. Comes with various speed settings.', status_id: 1, type_id: 12, image: 'baby_swing.jpg', user_id: 5, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 43, name: 'Rocking Chair', description: 'A rocking chair for the nursery. Provides comfort and relaxation. Made with high-quality materials.', status_id: 1, type_id: 9, image: 'rocking_chair.jpg', user_id: 5, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 44, name: 'Bouncer', description: 'A fun bouncer for babies. Keeps the baby entertained. Safe and comfortable design.', status_id: 1, type_id: 12, image: 'bouncer.jpg', user_id: 5, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 45, name: 'Educational Toys', description: 'Educational toys for learning. Stimulate cognitive development. Fun and interactive.', status_id: 1, type_id: 5, image: 'educational_toys.jpg', user_id: 6, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 46, name: 'Books', description: 'Books for kids. Various genres to spark imagination. Perfect for bedtime stories.', status_id: 1, type_id: 12, image: 'books.jpg', user_id: 6, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 48, name: 'Bottle Warmer', description: 'A convenient bottle warmer. Heats bottles quickly and evenly. Compact and easy to use.', status_id: 1, type_id: 8, image: 'bottle_warmer.jpg', user_id: 6, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 49, name: 'Changing Table', description: 'A sturdy changing table. Includes ample storage space. Essential for diaper changes.', status_id: 1, type_id: 1, image: 'changing_table.jpg', user_id: 6, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 50, name: 'Safety Gates', description: 'Safety gates for baby-proofing. Prevents access to hazardous areas. Easy to install.', status_id: 1, type_id: 7, image: 'safety_gates.jpg', user_id: 6, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 51, name: 'Nursing Pillow', description: 'A comfortable nursing pillow. Supports baby during feeding. Soft and easy to clean.', status_id: 1, type_id: 8, image: 'nursing_pillow.jpg', user_id: 7, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 52, name: 'Baby Bath Seat', description: 'A safe bath seat for babies. Provides support during bath time. Non-slip and secure.', status_id: 1, type_id: 6, image: 'baby_bath_seat.jpg', user_id: 7, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 53, name: 'Baby Monitor', description: 'A baby monitor for safety. Ensures constant supervision. Features clear audio and video.', status_id: 1, type_id: 7, image: 'baby_monitor.jpg', user_id: 8, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 54, name: 'Rocking Horse', description: 'A fun rocking horse. Encourages imaginative play. Durable and safe.', status_id: 1, type_id: 5, image: 'rocking_horse.jpg', user_id: 8, created_at: knex.fn.now(), updated_at: knex.fn.now() },
      ]);
    });
}
