import './style.css'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { getAtendimentos, deleteAtendimento } from '../../api/atendimentos';
import {toast} from 'react-toastify'


// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function Atendimentos(){

  const [atendimentos, setAtendimentos] = useState([])
  const navigate = useNavigate()
  const handleUpdate = async (atendimento) => {
        navigate('/update/atendimento', { state: { atendimento }})
    }
    
  const handleDelete = async (id) => {
    
    try {
        const response = await deleteAtendimento(id)
        if(response.status === 204){
            toast("Atendimento deletado com sucesso!")
            return
        }   
    } catch (error) {
        toast("Erro ao deletar atendimento, tente novamente mais tarde.")
    }

    setAtendimentos(atendimentos => atendimentos.filter(atendimento => atendimento.id !== id))
  }

  // função "listener" que ao carregar vai transformar em lista
  useEffect(() => {
    async function carregar() {
      const allAtendimentos = await getAtendimentos()
      setAtendimentos(allAtendimentos)
    }
    carregar();
  }, []);
    return(
        <main>
            <div className='cliente-list'>
                <Link to={'/create/atendimento'}>
                    <button>Criar novo atendimento</button>
                </Link>
                <div className='cliente-header' key='header'>
                    <div>ID</div>
                    <div>Dia</div>
                    <div>Hora</div>
                    <div>Valor</div>
                    <div>Concluído</div>
                    <div>Ações</div>
                    <div>      </div>
                </div>
                {
                    atendimentos.length == 0
                        ? <div className='cliente'>
                            <label>Não há resultados</label>
                        </div>
                    : atendimentos.map(atendimento =>
                        <div className='cliente' key={atendimento.id}>
                            <label>{atendimento.id}</label>
                            <label>{atendimento.dia}</label>
                            <label>{atendimento.hora}</label>
                            <label>{atendimento.valor}</label>
                            <label>{atendimento.concluido ? "Sim" : "Não"}</label>
                            <div className="actions">
                                <button type='button' onClick={() => handleUpdate(atendimento)}>Alterar</button>
                                <button type='button' onClick={() => handleDelete(atendimento.id)}>Deletar</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </main>
    )
}

export default Atendimentos