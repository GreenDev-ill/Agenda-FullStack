import ServiceCliente from '../service/clientes.js'

class ControllerCliente{
    async FindAll(_, res) {
        try {
            const resultado = await ServiceCliente.FindAll()
            console.log(resultado)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }
    async Find(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceCliente.Find(id)
            res.status(200).send({cliente})   
        } catch (error) {
            res.status(500).send({error: error.message})
        }
        
    }
    async Create(req, res) {
        try {
            const {nome, email, senha} = req.body
            await ServiceCliente.Create(nome, email, senha)
            res.status(201).send()   
        } catch (error) {
            res.status(500).send({error: error.message})
        }
        
    }
    async Update(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha
            await ServiceCliente.Update(id, nome, email, senha)
            res.status(200).send()   
        } catch (error) {
            res.status(500).send({error: error.message})
        }
        
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            const resultado = ServiceCliente.Delete(id)
            res.status(204).send()   
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

    async Login(req,res){
        try {
            const { email, senha } = req.body      
            const token = await ServiceCliente.Login(email, senha)    
            res.status(200).send({ token })  
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

} export default new ControllerCliente()