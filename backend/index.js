import express from 'express'
import cors from 'cors'
import router from './src/router/routes.js'
import database from './src/config/database.js'

const app = express();

app.use(cors())

app.use(express.json())

//rotas
app.use('/api/v1', router)

const port = 5432

database.db
    .sync({ force:false })          // forçar para nos testes dropar o banco e criar um novo com base no Model
    .then((_)=>{                    //quando der certo
        console.log("conectado com o banco")
    })                      
    .catch((e)=>{                   //quando não der certo
        console.log("não conectou com o banco " + e)
    })                        

app.listen(port, ()=>{
    console.info("Servidor rodando na porta " + port)
})