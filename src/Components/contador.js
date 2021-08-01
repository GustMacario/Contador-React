import {useState} from "react"

function Contador() {

    function somar(){
        setContador(contador+1);
      }

    const [contador, setContador] = useState(0);
    return (
        <>
            <h1 className="title">
                Contador:{contador}
            </h1>
            <button className="botao" onClick={somar}>+</button>

        </>
    )
}

export default Contador;