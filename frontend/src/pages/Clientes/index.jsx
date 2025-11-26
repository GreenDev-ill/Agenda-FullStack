import './style.css'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { getClientes, deleteCliente } from '../../api/clientes';
import {toast} from 'react-toastify'


// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function Clientes(){

  const [clientes, setClientes] = useState([])
  const navigate = useNavigate()
  const handleUpdate = async (cliente) => {
        navigate('/update/cliente', { state: { cliente }})
    }
    
  const handleDelete = async (id) => {
    
    try {
        const response = await deleteCliente(id)
        if(response.status === 204){
            toast("Cliente deletado com sucesso!")
            return
        }   
    } catch (error) {
        toast("Erro ao deletar, tente novamente mais tarde.")
    }

    setClientes(clientes => clientes.filter(cliente => cliente.id !== id))
  }

  // função "listener" que ao carregar vai transformar em lista
  useEffect(() => {
    async function carregar() {
      const allClientes = await getClientes()
      setClientes(allClientes)
    }
    carregar();
  }, []);
    return(
        <main>
            <div className='cliente-list'>
                <Link to={'/create/cliente'}>
                    <button>Criar novo cliente</button>
                </Link>
                <div className='cliente-header' key='header'>
                    <div>Nome</div>
                    <div>Email</div>
                    <div>Ações</div>
                </div>
                {
                    clientes.length == 0
                        ? <div className='cliente'>
                            <label>Não há resultados</label>
                        </div>
                    : clientes.map(cliente =>
                        <div className='cliente' key={cliente.id}>
                            <label>{cliente.nome}</label>
                            <label>{cliente.email}</label>
                            <div className="actions">
                                <button type='button' onClick={() => handleUpdate(cliente)}>Alterar</button>
                                <button type='button' onClick={() => handleDelete(cliente.id)}>Deletar</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </main>
    )
}

export default Clientes