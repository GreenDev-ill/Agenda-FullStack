import {Sequelize} from "sequelize";

class Database{
    constructor() {
        this.init();
    }
    init() {
        // .env - dotenv - opção avançada para configurar db
        this.db = new Sequelize({
                    dialect: 'postgres', // <--- Mudou de 'mysql' para 'postgres'
                    database: 'agenda_9igy',
                    username: 'agenda_9igy_user',
                    password: 'Deorcq2PF64KqNTPhW03HDRM23WpUiId',
                    host: 'dpg-d4l3ca2li9vc73e2n300-a',
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