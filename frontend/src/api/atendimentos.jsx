import api from "./api"

export const getAtendimentos = async (idCliente) => {
    const response = await api.get('/api/v1/atendimentos/' + idCliente)

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS', response)
    return response.data.resultado
} //não exportar default pq vai ter várias funções // função assincrona que fica standby até que alguem a chame
export const getTudoAtendimentos = async () => {
    const response = await api.get('/api/v1/atendimentos/todos')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS', response)
    return response.data.resultado
}
export const createAtendimento = async (atendimento) => {
    const response = await api.post('/api/v1/atendimento', atendimento)
    if(response.status !== 201){
        return[] // throw new Error('')
    }
    return response
}
export const updateAtendimento = async (id, atendimento) => {
    const response = await api.put("api/v1/atendimento/" + id, atendimento)
    return response
}

export const deleteAtendimento = async (id) => {
    const response = await api.delete("api/v1/atendimento/" + id)
    return response
}