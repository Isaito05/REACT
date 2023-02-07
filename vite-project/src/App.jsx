import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const [valor, setValor]=useState("");
  const [valor1, setValor1]=useState("");
  const [op, setOp]=useState("");

  const Operador = (i) => {
    if (op == "") {
      setValor1(parseFloat(valor));
      setOp(i.target.value);
      setValor("");
    } else {
      setOp(i.target.value);
    }
  };

  const Res =()=>{
    if(op == "+"){
      setValor(parseFloat(valor) + valor1);
    }
    if(op == "-"){
      setValor(parseFloat(valor1) - valor);
    }
    if(op == "/"){
      setValor(parseFloat(valor1) / valor);
    }
    if(op == "*"){
      setValor(parseFloat(valor) * valor1);
    }
    
  }

  // const Resultado = () => {
  //   if(Suma = "+"){
  //     setValor + valor
  //   }
  // }

  function Boton(props){
    return(
      <button class="btn btn-danger" onClick={() => setValor(valor + (props.numero))}>{props.numero}</button>
    )
  } 

  function BtnOpera(props){
    return(
      <button class="btn btn-danger" onClick={Operador} value={props.numero}>{props.numero}</button>
    )
  } 

  function Resultado(props){
    return(
      <button class="btn btn-danger" onClick={Res} value={props.numero}>{props.numero}</button>
    )
  } 

  const Pantalla =()=>{
    return(
      <input type="text" value={valor} />
    )
  }

  
  

  return (
    <>
      <table>
        <tr>
          <Pantalla/>
        </tr>       
        <tr>
          <Boton numero="9"/>
          <Boton numero="8"/>
          <Boton numero="7"/>
          <BtnOpera numero="+"/>
        </tr>
          <Boton numero="4"/>
          <Boton numero="5"/>
          <Boton numero="6"/>
          <BtnOpera numero="-"/>
        <tr>
          <Boton numero="1"/>
          <Boton numero="2"/>
          <Boton numero="3"/>
          <BtnOpera numero="*"/>
        </tr>
        <tr>
          <Boton numero="0"/>
          <BtnOpera numero="/"/>
          <Resultado numero="="/>
        </tr>
      </table>
      
    </>
  )
}

export default App
