import axios from "axios";

//Constante que almacena la direcion del aechivo servidor json
const baseUrl='http://localhost:3001/notes'

//Metodo que devuelve todo los datos del servidor json
const getAll=()=>{
    const request= axios.get(baseUrl)
    return request.then(Response=>Response.data)
}
//Metodo que permite enviar datos al servidor del archivo json
const create =(newObject)=>{
    const request= axios.post(baseUrl,newObject)
    return request.then(Response=>Response.data)
}
//Metodo que permite crea un nuevo elemento o reemplaza una representación del elemento de destino con los datos de la petición.
const update=(id,newObject)=>{
    const request= axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(Response=> Response.data)
}

export default {getAll,create,update}