import {useState} from "react"
import { createAtendimento } from "../../api/atendimentos";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const INITIAL_STATE = {
        dia: '',
        hora:'',
        valor:'',
        concluido:false
}

export default function CreateAtendimento(){
    const navigate = useNavigate()
    const [atendimento,setAtendimento] = useState(INITIAL_STATE)
    const handlChange = (event) => {            //para permitir alterar os valores de forms
        const {id, value} = event.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }
    const handleSave = async (e) => {
        
        e.preventDefault() // barra o envio automatico
        try {
            const response = await createAtendimento(atendimento)
            if(response.status == 201){
                toast("Atendimento criado com sucesso.")
                navigate('/atendimentos') 
            }
        } catch (error) {
            toast("Erro ao criar atendimento.")
        }

    }
    const handleReset = (e) => {
        e.preventDefault()
        setAtendimento(INITIAL_STATE)
    }
    return (
        <main>
            <div>
            <h1> Criar Novo Atendimento </h1>
            <form>
                <div>
                    <label>Dia: </label>
                    <input type="text" name="dia" id="dia" value={atendimento.dia} onChange={handlChange}/>
                </div>
                <div>
                    <label>Hora: </label>
                    <input type="text" name="hora" id ="hora" value={atendimento.hora} onChange={handlChange}/>
                </div>
                <div>
                    <label>Valor: </label>
                    <input type="text" name="valor" id="valor" value={atendimento.valor} onChange={handlChange}/>
                </div>
                <div>
                    <label>Concluído: </label>
                    <input type="checkbox" name="concluido" id="concluido" value={atendimento.concluido} onChange={handlChange}/>
                </div>
                <button type="reset" onClick={handleReset}>Limpar</button>
                <button type="submit" onClick={handleSave}>Enviar</button>
            </form>
            </div>
        </main>
    )
}