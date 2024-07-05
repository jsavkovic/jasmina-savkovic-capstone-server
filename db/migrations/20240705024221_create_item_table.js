/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('item', (table) => {
        table.bigIncrements('id').primary();
        table.string('name', 255).notNullable();
        table.text('description', 'longtext');
        table.integer('status_id').unsigned().references('id').inTable('item_status');
        table.integer('type_id').unsigned().references('id').inTable('item_type');
        table.string('image', 255);
        table.integer('category_id').unsigned().references('id').inTable('item_category');
        table.bigInteger('user_id').unsigned().references('id').inTable('users');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('item');
};
