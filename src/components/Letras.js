const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras () {
    return (
      <div className="letras">
        <div className="botoes">
          {alfabeto.map((a) => <Letra letra={a}/>)}
        </div>
      </div>
    )
  }

  function Letra (props){
    return (
      <>
        <button disabled>{props.letra}</button>
      </>
    )
  }