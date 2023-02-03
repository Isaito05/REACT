import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const [valor, setValor]=useState("")

  var Suma =(op)=>{
    return(
      op = "+"
    )
  }

  const Resultado = () => {
    if(Suma = "+"){
      setValor + valor
    }
  }

  function Boton(props){
    return(
      <button class="btn btn-danger" onClick={() => setValor(valor + (props.numero))}>{props.numero}</button>
    )
  } 

  const Pantalla =()=>{
    return(
      <input type="text" value={valor} />
    )
  }
  

  return (
    <>
      {/* <Contador/> */}
      <table>
        <tr>
          <Pantalla/>

        </tr>       
        <tr>
          <Boton numero="9"/>
          <Boton numero="8"/>
          <Boton numero="7"/>
          <Boton numero="+"><Suma/>+</Boton>
        </tr>
          <Boton numero="4"/>
          <Boton numero="5"/>
          <Boton numero="6"/>
          <Boton numero="-"/>
          {/* <button><Operador/> * </button> */}

        <tr>
          <Boton numero="1"/>
          <Boton numero="2"/>
          <Boton numero="3"/>
          <Boton numero="*"/>
        </tr>
        <tr>
        <Boton numero="0"/>
        <Boton numero="/"/>
        <button class="btn btn-danger"><Resultado/> = </button>
        </tr>
      </table>
      
    </>
  )
}

export default App
