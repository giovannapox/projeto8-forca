import palavras from './palavras';
import Jogo from './components/Jogo'
import Letras from './components/Letras'
import { useState } from 'react';

export default function App() {
  let palavraSorteada = "";
  const [letraHabilitada, setLetraHabilitada] = useState(true)
  const [palavra, setPalavra] = useState()
  const [jaTem, setJaTem] = useState([])
  const [letra, setLetra] = useState([])
  const [erros, setErros] = useState(0)
  const [arrPalavra, setArrPalavra] = useState(palavraSorteada)
  const [venceu, setVenceu] = useState("palavraAdivinhada")


  function iniciaJogo() {
    setErros(0);
    setVenceu("palavraAdivinhada")
    setLetraHabilitada(false);
    setJaTem([])
    setPalavra()

    function shuffleArray(arr) {

      // Loop em todos os elementos
      for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      // Retornando array com aleatoriedade
      return arr;
    }

    shuffleArray(palavras)
    palavraSorteada = palavras[0].split("")
    console.log(letraHabilitada)
    let underline = palavraSorteada.map(function () {
      return "_ "
    });
    setPalavra(underline);
    setArrPalavra(palavraSorteada);
    console.log(palavraSorteada)
  }


  return (
    <>
      <Jogo venceu={venceu} erros={erros} setErros={setErros} iniciaJogo={iniciaJogo} letraHabilitada={letraHabilitada} setLetraHabilitada={setLetraHabilitada} palavra={palavra} setPalavra={setPalavra} />
      <Letras setPalavra={setPalavra} setVenceu={setVenceu} erros={erros} setErros={setErros} palavra={palavra} letra={letra} setLetra={setLetra} arrPalavra={arrPalavra} letraHabilitada={letraHabilitada} setLetraHabilitada={setLetraHabilitada} jaTem={jaTem} setJaTem={setJaTem} />
    </>
  )
}

