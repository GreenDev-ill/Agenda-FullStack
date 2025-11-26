import express from 'express'
import ControllerCliente from '../controller/clientes.js'
import ControllerAtendimento from '../controller/atendimentos.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.post('/login', ControllerCliente.Login)

//api/v1
router.get('/cliente/context', authMiddleware(), ControllerCliente.Find)
router.post('/cliente/', ControllerCliente.Create)
//router.put('/cliente/', authMiddleware(), ControllerCliente.Update)
router.delete('/cliente/', authMiddleware(), ControllerCliente.Delete)

router.get('/clientes', authMiddleware(), ControllerCliente.FindAll)
router.get('/cliente/:id', authMiddleware(), ControllerCliente.Find)
router.put('/cliente/:id', ControllerCliente.Update)
router.delete('/cliente/:id', authMiddleware(), ControllerCliente.Delete)


//api/v1
//router.get('/atendimento/context', authMiddleware(), ControllerAtendimento.Find)
router.post('/atendimento/', authMiddleware(), ControllerAtendimento.Create)
//router.put('/atendimento/', authMiddleware(), ControllerAtendimento.Update)
router.delete('/atendimento/', authMiddleware(), ControllerAtendimento.Delete)

router.get('/atendimentos', authMiddleware(), ControllerAtendimento.FindAll)
router.get('/atendimento/:id', authMiddleware(), ControllerAtendimento.Find)
router.put('/atendimento/:id', ControllerAtendimento.Update)
router.delete('/atendimento/:id', authMiddleware(), ControllerAtendimento.Delete)

export default router