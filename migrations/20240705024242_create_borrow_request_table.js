/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('borrow_request', (table) => {
        table.bigIncrements('id').primary();
        table.bigInteger('borrower_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.bigInteger('lender_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.bigInteger('item_id').unsigned().references('id').inTable('item').onDelete('CASCADE');
        table.timestamp('timestamp').defaultTo(knex.fn.now());
        table.date('start_date');
        table.date('end_date');
        table.integer('borrow_status_id').unsigned().references('id').inTable('borrow_status');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('borrow_request');
};
