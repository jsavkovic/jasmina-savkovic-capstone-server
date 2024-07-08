import knex from 'knex';
import knexConfig from '../knexfile.js';

const db = knex(knexConfig);

const seedFiles = [
    './seeds/01_seed_item_status.js',
    './seeds/02_seed_item_type.js',
    './seeds/03_seed_borrow_status.js',
    './seeds/04_seed_relationship_status.js',
    './seeds/05_seed_users.js',
    './seeds/06_seed_item.js',
    './seeds/07_seed_borrow_request.js',
    './seeds/08_seed_user_relationship.js',
    './seeds/09_seed_transaction_history.js'
];

async function runSeeds() {
    for (const file of seedFiles) {
        console.log(`Running seed file: ${file}`);
        const seed = await import(file);
        await seed.seed(db);
    }
    console.log('All seeds run successfully');
}

runSeeds()
    .then(() => {
        console.log('Seeding completed.');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Error running seeds:', error);
        process.exit(1);
    });
