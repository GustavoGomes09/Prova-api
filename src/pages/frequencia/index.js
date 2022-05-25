import { useState } from "react"
import axios from "axios";

export default function Index() {

    const [texto, setTexto] = useState('');
    const [caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarfrequencia(){
       const resp = await axios.get(`http://localhost:5000/dia2/freqcaractere/${texto}/${caractere}`)
       setResposta(resp.data.freq);
    }

    return (
        <main>
            <h1> Frequência </h1>
            <div>
                Texto: <input type={'text'} onChange={e => setTexto(e.target.value)} />
            </div>    
            <div>
                    Caractere: <input type={'text'} onChange={e => setCaractere(e.target.value)} />
            </div>
            <div>
                    <button onClick={verificarfrequencia}>Verificar Frequência</button>
            </div>
            <div>
                    Frequência: {resposta}
            </div>
        </main>
    )
}