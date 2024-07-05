/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('transaction_history', (table) => {
        table.bigIncrements('id').primary();
        table.bigInteger('borrow_request_id').unsigned().references('id').inTable('borrow_request').onDelete('CASCADE');
        table.integer('action_id').unsigned().references('id').inTable('item_status').onDelete('CASCADE');
        table.bigInteger('actor_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.bigInteger('target_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.timestamp('timestamp').defaultTo(knex.fn.now());
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('transaction_history');
};
