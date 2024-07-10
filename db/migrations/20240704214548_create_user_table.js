export function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.bigIncrements('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('image');
        table.timestamp('created_user').defaultTo(knex.fn.now());
        table.timestamp('created_pswd').defaultTo(knex.fn.now());
        table.timestamp('last_login').defaultTo(knex.fn.now());
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

export function down(knex) {
    return knex.schema.dropTableIfExists('users');
}
