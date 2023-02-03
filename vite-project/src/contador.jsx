import { useState } from "react"
import { Fragment } from "react"

export const Contador=()=>{

    const [valor,setValor]=useState("")

    const [valor2]=useState(valor)

    const suma=()=>{(valor+"+")}

    const resta=()=>{setValor(valor-1)}

    

    const igual=()=>{setValor("=")}

    const uno=()=>{setValor(valor+"1")}
    
    const dos=()=>{setValor(valor+"2")}
    const tres=()=>{setValor(valor+"3")}
    const cuatro=()=>{setValor(valor+"4")}
    const cinco=()=>{setValor(valor+"5")}
    const seis=()=>{setValor(valor+"6")}
    const siete=()=>{setValor(valor+"7")}
    const ocho=()=>{setValor(valor+"8")}
    const nueve=()=>{setValor(valor+"9")}
    const cero=()=>{setValor(valor+"0")}

    return(
        <Fragment>

            
            <h1>CALCULADORA</h1>
            <table border={1}>
            {/* <h1>{valor}</h1> */}
             <input type="number" value={valor} /><br />
         
             <button type="button"  onClick={uno}>1</button>
             <button type="button"  onClick={dos}>2</button>
             <button type="button"  onClick={tres}>3</button>
             <button type="button"  onClick={cuatro}>4</button><br /><br />
             <button type="button"  onClick={cinco}>5</button>
             <button type="button"  onClick={seis}>6</button>
             <button type="button"  onClick={siete}>7</button>
             <button type="button"  onClick={ocho}>8</button><br /><br />
             <button type="button"  onClick={nueve}>9</button>
             <button type="button"  onClick={cero}>0</button>
             <button type="button"  onClick={suma}>+</button>
             <button type="button" onClick={igual}>=</button>
            </table> 

            
            
            
        </Fragment>
    )
}

export default Contador