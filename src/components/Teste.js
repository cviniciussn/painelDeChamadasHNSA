import { useState } from 'react'
import api from '../services/api'



export function Teste(){

const [pacientes, setPacientes] = useState()

  async function getData(){
    await api.get("").then( response => setPacientes(response.data))
  }

  setTimeout(getData, 3000)
return pacientes
}

