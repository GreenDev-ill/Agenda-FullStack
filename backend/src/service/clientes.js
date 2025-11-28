import Cliente from '../Model/clientes.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const SALT = 10 // recomendado entre 10-12, mais que isso demora muito
const JWT_SEGREDO = "a-string-secret-at-least-256-bits-long"
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

class ServiceCliente {
    
    async FindAll(){
        return Cliente.findAll()
    }
    async Find(id){    //quando uma função tem uma promise (usa await), tem que usar o async
        if (!id){
            throw new Error("Favor informar o ID do cliente!")
        }
        const cliente = await Cliente.findByPk(id)
        if (!cliente){
            throw new Error ("Cliente " + id +" não encontrado!")
        }
        return cliente
    }
    async Create(nome, email, senha){
        if(!nome || !email || !senha){
            throw new Error("Favor preencher todos os campos.")
        }

        const senhaCripto = await bcrypt.hash(String(senha), SALT) //criptografa a senha

        await Cliente.create({nome, email, senha: senhaCripto})
    }
    async Update(id, nome, email, senha){
        if (!id){
            throw new Error("Favor informar o ID do cliente para alterar!")
        }
        const cliente = await Cliente.findByPk(id)
        if (!cliente){
            throw new Error ("Cliente " + id +" não encontrado para alterar!")
        } else {
            cliente.nome = nome
            cliente.email = email
            cliente.senha = await bcrypt.hash(String(senha), SALT)
            await cliente.save()
        }
        
    }
    async Delete(id){
        if (!id){
            throw new Error("Favor informar o ID do cliente para deletar!")
            return
        }
        const cliente = await Cliente.findByPk(id)
        if (!cliente){
            throw new Error ("Cliente " + id +" não encontrado para deletar!")
            return
        }else{
            cliente.destroy(id)
        }
       
    }
    
    async Login(email, senha){
        if (!email || !senha) {
            throw new Error ("Email ou senha inválidos.")
        }

        //verifica cliente no banco de dados
        const cliente = await Cliente.findOne({ where: { email } })
        if (!cliente || !(await bcrypt.compare(String(senha), cliente.senha))) {
            throw new Error("Email ou senha inválidos.")
        }
        
        //criar o token
        return {idLogin: cliente.id, nomeLogin: cliente.nome, token: jwt.sign(
            { id: cliente.id, nome: cliente.nome },
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )}
    }
} export default new ServiceCliente()