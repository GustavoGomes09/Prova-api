import { useState } from "react"
import axios from "axios";

export default function Index() {

    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState('0')
    const [resposta, setResposta] = useState('0')

    function adicionar(){
        setNumeros([...numeros, numero])
        setNumero('')
    }

    async function verificarMaior() {
       const resp = await axios.post('http://localhost:5000/dia2/maiorNumero', numeros);
       setResposta(resp.data.maior);
    }

    return (
        <main>
            <h1> Maior Número </h1>

            <div>
                Número: <input type={'text'} value={numero} onChange={e =>(Number(e.target.value))} /> 
                <button onClick={adicionar}>Adicionar Número</button>
            </div>

            

            <div>
                <button onClick={verificarMaior}>Verificar</button> Maior Número é: {resposta}
            </div>
        </main>
    )
}