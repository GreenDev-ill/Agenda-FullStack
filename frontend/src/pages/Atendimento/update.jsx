import { useEffect, useState } from "react"
import { updateAtendimento } from "../../api/atendimentos";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css'
import { toast } from "react-toastify";

export default function UpdateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState({
        dia: '',
        hora: '',
        valor: '',
        concluido: false
    })
    // adicionar userLocation novo para pegar o state passado anteriormente
    const location = useLocation()
    const { atendimento: prevAtendimento } = location.state
    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        // alterado do init para o prev
        setAtendimento({ ...prevAtendimento })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // Alterada função pra update
        const response = await updateAtendimento(prevAtendimento.id, atendimento)

        if (response.status === 200) {
            navigate('/atendimentos')
            toast("Atendimento alterado com sucesso")
        } else {
            toast("Erro ao alterar Atendimento")
            console.log(response)
        }
    }

    // testar
    useEffect(() => {
        setAtendimento({ ...prevAtendimento })
    }, [])

    return (
        <div className="form">
            <form>
                <div>
                    <label>Dia: </label>
                    <input type="text" name="dia" id="dia" value={atendimento.dia} onChange={handleChange}/>
                </div>
                <div>
                    <label>Hora: </label>
                    <input type="text" name="hora" id ="hora" value={atendimento.hora} onChange={handleChange}/>
                </div>
                <div>
                    <label>Valor: </label>
                    <input type="text" name="valor" id="valor" value={atendimento.valor} onChange={handleChange}/>
                </div>
                <div>
                    <label>Concluído: </label>
                    <input type="checkbox" name="concluido" id="concluido" value={atendimento.concluido} onChange={handleChange}/>
                </div>
                <button type="reset" onClick={handleReset}>Limpar</button>
                <button type="submit" onClick={handleSave}>Enviar</button>
            </form>
        </div>
    )
}