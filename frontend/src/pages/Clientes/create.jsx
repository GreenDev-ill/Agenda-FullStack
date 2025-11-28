import {useState} from "react"
import { createCliente } from "../../api/clientes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const INITIAL_STATE = {
        nome: '',
        email:'',
        senha:'',
        ativo:true
}

export default function CreateCliente(){
    const navigate = useNavigate()
    const [cliente,setCliente] = useState(INITIAL_STATE)
    const handlChange = (event) => {            //para permitir alterar os valores de forms
        const {id, value} = event.target;
        setCliente({
            ...cliente,
            [id]: value
        })
    }
    const handleSave = async (e) => {
        
        e.preventDefault() // barra o envio automatico
        try {
            const response = await createCliente(cliente)
            if(response.status == 201){
                toast("Cliente criado com sucesso.")
                navigate('/') 
            }
        } catch (error) {
            toast("Erro ao criar cliente.")
        }

    }
    const handleReset = (e) => {
        e.preventDefault()
        setUser(INITIAL_STATE)
    }
    return (
        <main>
            <div>
            <h1> Criar Novo Cliente </h1>
            <form>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="nome" id="nome" value={cliente.nome} onChange={handlChange}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" id ="email" value={cliente.email} onChange={handlChange}/>
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="senha" id="senha" value={cliente.senha} onChange={handlChange}/>
                </div>
                <button type="reset" onClick={handleReset}>Limpar</button>
                <button type="submit" onClick={handleSave}>Enviar</button>
            </form>
            </div>
        </main>
    )
}