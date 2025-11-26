import jwt from 'jsonwebtoken'
import ServiceCliente from '../service/clientes.js'

const JWT_SEGREDO = "a-string-secret-at-least-256-bits-long"
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

export default function authMiddleware(roles = []){
    return async (req,res,next) => {
        try {
            const token = req.headers['authorization']
            token.split(' ')[1]
            if (!token){
                throw new Error ("Você não tem o token de permissão.")
            }
            const decoded = jwt.verify(token.split(' ')[1], JWT_SEGREDO)
            
            const cliente = await ServiceCliente.Find(decoded.id)
            
            console.log("permissão: " + cliente.permissao)

            // if(roles.length && !roles.includes(cliente.permissao)){
            //     throw new Error("Você não tem permissão para realizar esta ação.")
            // }
            req.headers.cliente = cliente
            console.log(decoded)
            next()
        } catch (error) {
            res.status(403).send({
                data: null,
                msg: "Você não tem permissão para realizar essa requisição.",
                error: true
            })
        }
        }
}


// const jwt = require("jsonwebtoken");

// function authMiddleware(req, res, next) {
//   const token = req.headers["authorization"];

//   if (!token) {
//     return res.status(400).json({ mensagem: "Token não fornecido" });
//   }

//   jwt.verify(token, "exemplo", (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ mensagem: "Token inválido" });
//     }

//     req.session = decoded;

//     next();
//   });
// }

// module.exports = authMiddleware;