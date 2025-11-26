import api from "./api"

export const getClientes = async () => {
    const response = await api.get('/api/v1/clientes')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS', response)
    return response.data.resultado
} //não exportar default pq vai ter várias funções // função assincrona que fica standby até que alguem a chame

export const createCliente = async (cliente) => {
    const response = await api.post('/api/v1/cliente', cliente)
    if(response.status !== 201){
        return[] // throw new Error('')
    }
    return response
}
export const updateCliente = async (id, cliente) => {
    const response = await api.put("api/v1/cliente/" + id, cliente)
    return response
}

export const loginCliente = async (email,senha) => {
    const response = await api.post('/api/v1/login',{email,senha})
    return response
}

export const deleteCliente = async (id) => {
    const response = await api.delete("api/v1/cliente/" + id)
    return response
}