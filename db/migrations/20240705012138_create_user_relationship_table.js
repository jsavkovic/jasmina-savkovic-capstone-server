/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('user_relationship', (table) => {
        table.increments('id').primary();
        table.bigInteger('sender_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.bigInteger('receiver_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.integer('relationship_status_id').unsigned().references('id').inTable('relationship_status');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('user_relationship');
};
