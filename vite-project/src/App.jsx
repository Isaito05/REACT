import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contador from './contador'
import Tabla from './tabla'

function App() {
  const Nuevo=()=>{alert("ISAITO SAYAYIN")}

  const Otro=()=>{
    return(<>"Este es otro componente"</>)
  }

  const Boton=()=>{
    return(<button onClick={()=>(Nuevo())}> Dame click</button>)
  }
  const b="ESTO ES UNA PRUEBA"
  var i = "ISAITO TREMENDO"

  

  return (
   <>
    {/* <h1>{b}</h1>
   <h2>Prueba SPA {b}</h2>
    <Nuevo/>
   <h1>{i}</h1>
   <h1><Otro/></h1> 
   < Boton/>
    <Tabla/>  */}
    <Contador/> 
   </>
  )
}

export default App
