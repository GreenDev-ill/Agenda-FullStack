import Atendimento from '../Model/atendimentos.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const SALT = 10 // recomendado entre 10-12, mais que isso demora muito
const JWT_SEGREDO = "a-string-secret-at-least-256-bits-long"
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

class ServiceAtendimento {
    
    async FindAll(){
        return Atendimento.findAll()
    }
    async Find(id){    //quando uma função tem uma promise (usa await), tem que usar o async
        if (!id){
            throw new Error("Favor informar o ID!")
        }
        const atendimento = await Atendimento.findByPk(id)
        if (!atendimento){
            throw new Error ("Atendimento " + id +" não encontrado!")
        }
        return atendimento
    }
    async Create(dia, hora, valor){
        if(!dia || !hora || !valor){
            throw new Error("Favor preencher todos os campos.")
        }

        await Atendimento.create({dia, hora, valor})
    }
    async Update(id, dia, hora, valor, concluido){
        if (!id){
            throw new Error("Favor informar o ID para alterar o atendimento!")
        }
        const atendimento = await Atendimento.findByPk(id)
        if (!atendimento){
            throw new Error ("Atendimento " + id +" não encontrado para alterar!")
        } else {
            atendimento.dia = dia
            atendimento.hora = hora
            atendimento.valor = valor
            await atendimento.save()
        }
        
    }
    async Delete(id){
        if (!id){
            throw new Error("Favor informar o ID do atendimento para deletar!")
            return
        }
        const atendimento = await Atendimento.findByPk(id)
        if (!atendimento){
            throw new Error ("Atendimento " + id +" não encontrado para deletar!")
            return
        }else{
            atendimento.destroy(id)
        }
       
    }

} export default new ServiceAtendimento()