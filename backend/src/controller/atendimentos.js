import ServiceAtendimento from '../service/atendimentos.js'

class ControllerAtendimento{

    async FindTudo(_, res) {
        try {
            const resultado = await ServiceAtendimento.FindTudo()
            console.log(resultado)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }
    async FindAll(req, res) {
        try {
            const idCliente = req.params.idCliente
            const resultado = await ServiceAtendimento.FindAll(idCliente)
            console.log(resultado)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }
    async Find(req, res) {
        try {
            const id = req.params.id
            const atendimento = await ServiceAtendimento.Find(id)
            res.status(200).send({atendimento})   
        } catch (error) {
            res.status(500).send({error: error.message})
        }
        
    }
    async Create(req, res) {
        try {
            if (!req.body.clienteID){
                throw new Error("Cliente não logado.")
            }
            const {dia, hora, valor, concluido, clienteID} = req.body
            await ServiceAtendimento.Create(dia, hora, valor, concluido, clienteID)
            res.status(201).send()   
        } catch (error) {
            res.status(500).send({error: error.message})
        }
        
    }
    async Update(req, res) {
        try {
            const id = req.params.id
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido
            const resultado = await ServiceAtendimento.Update(id, dia, hora, valor, concluido)
            res.status(200).send(resultado)   
        } catch (error) {
            res.status(500).send({error: error.message})
        }
        
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            const resultado = await ServiceAtendimento.Delete(id)
            res.status(204).send(resultado)   
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }

} export default new ControllerAtendimento()