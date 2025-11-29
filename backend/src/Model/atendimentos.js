import database from '../config/database.js'

class Atendimento {
    constructor(){
        this.model = database.db.define('atendimento', {
            id:{
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia:{type: database.db.Sequelize.STRING},
            hora:{type: database.db.Sequelize.STRING},
            valor:{type: database.db.Sequelize.STRING},
            concluido:{type: database.db.Sequelize.BOOLEAN},
            clienteID:{type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'clientes', // nome da tabela referenciada
                    CONSTRAINT: 'FK_Atendimentos_Clientes',
                    key: 'id',          // coluna da tabela referenciada
                    References: 'clientes'
                }
            }
        })
    }
} export default new Atendimento().model