import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'gostack_gobarber',
    synchronize: false,
    logging: false,
    entities: [
        "./src/models/*.ts"
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ],
    subscribers: [
    ],
});
