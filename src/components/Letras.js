import { useState } from "react"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let qualquerCoisa = [0];

export default function Letras ({setLetraHabilitada, setPalavra, setVenceu, letraHabilitada, jaTem, setJaTem, arrPalavra, letra, setLetra, palavra, erros, setErros}) {

  let letraCerta = [];

  function selecionarLetra (letraSelecionada){
    setJaTem([...jaTem, letraSelecionada]);
    letraCerta = [...letra]
    let acertos = 0;
    qualquerCoisa = palavra;
    
    for(let i = 0; i < arrPalavra.length; i++){
      let troca = palavra;
      if(letraSelecionada === arrPalavra[i]){
        letraCerta.push(letraSelecionada);
        setLetra(letraCerta);
        acertos++;
        troca[i] = letraSelecionada;
      }
    }

    if(acertos === 0){
      setErros(erros+1)
    }

    console.log(letraCerta)
  }

  if(erros === 6){
    setVenceu("palavraAdivinhada derrota")
    setPalavra(arrPalavra)
    setLetraHabilitada(true)
  } else if (!qualquerCoisa.includes("_ ") && qualquerCoisa[0] !== 0){
    qualquerCoisa = [0];
    setVenceu("palavraAdivinhada vitoria")
    setLetraHabilitada(true)
  }
  
    return (
      <div className="letras">
        <div className="botoes">
          {alfabeto.map((a) => <button data-test="letter" className="letra" onClick={() => selecionarLetra(a)} disabled={letraHabilitada || jaTem.includes(a)}>{a}</button>)}
        </div>
      </div>
    )
  }