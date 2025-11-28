import './style.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { getTudoAtendimentos } from '../../api/atendimentos';
import {toast} from 'react-toastify'
import { LoginClienteID } from '../Login';

// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function ListaAtendimentos(){

  const [atendimentos, setAtendimentos] = useState([])
  const navigate = useNavigate()


  // função "listener" que ao carregar vai transformar em lista
  useEffect(() => {
    async function carregar() {
      const allAtendimentos = await getTudoAtendimentos()
      setAtendimentos(allAtendimentos)
    }
    carregar();
  }, []);
    return(
        <main>
            <div className='cliente-list'>
                <div className='cliente-header' key='header'>
                    <div>ID</div>
                    <div>Dia</div>
                    <div>Hora</div>
                    <div>Valor</div>
                    <div>Concluído</div>
                    <div>Cliente ID</div>
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
                            <label>{atendimento.clienteID}</label>
                        </div>
                    )
                }

            </div>
        </main>
    )
}

export default ListaAtendimentos