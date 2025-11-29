import {Sequelize} from "sequelize";

class Database{
    constructor() {
        this.init();
    }
    init() {
        // .env - dotenv - opção avançada para configurar db
        this.db = new Sequelize(process.env.DATABASE_URL, {
                    dialect: 'postgres', // <--- Mudou de 'mysql' para 'postgres'
                    protocol: 'postgres',
                    dialectOptions: {
                    ssl: {
                    require: true,
                    rejectUnauthorized: false // <--- OBRIGATÓRIO no Render
                    }
            }
        });
    }
} export default new Database()