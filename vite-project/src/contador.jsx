import { useState } from "react"
import { Fragment } from "react"

export const Contador=()=>{
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

    const Borrar = () => {
       return(
        setValor("")
       )
    }

  const Res =()=>{
        if(op == "+"){
        setValor(parseFloat(valor) + valor1);
        setOp("");
        setValor1("");
        }
        if(op == "-"){
        setValor(parseFloat(valor1) - valor);
        setOp("");
        setValor1("");
        }
        if(op == "/"){
        setValor(parseFloat(valor1) / valor);
        setOp("");
        setValor1("");
        }
        if(op == "*"){
        setValor(parseFloat(valor) * valor1);
        setOp("");
        setValor1("");
        }
    };

  function Boton(props){
        return(
        <button class="boton" onClick={() => setValor(valor + (props.numero))}>{props.numero}</button>
        )
    }; 

  function BtnOpera(props){
        return(
        <button class="boton" onClick={Operador} value={props.numero}>{props.numero}</button>
        )
    ;} 

  function Resultado(props){
        return(
        <button class="boton" onClick={Res} value={props.numero}>{props.numero}</button>
        )
    }; 

    function Borrar1(props){
        return(
            <button class="boton" onClick={Borrar} value={props.numero}>{props.numero}</button>
        )
    }

  function Pantalla (){
        return(
        <input type="text" value={valor} />
        )
    };
    return(
        <Fragment>
            <div class="centrar">
                <h1>CALCULATOR</h1>
            </div>
            <div class="contador">
                <table>
                    <tr>
                    <Pantalla/>
                    </tr>       
                    <tr>
                    <Boton numero="9"/>
                    <Boton numero="8"/>
                    <Boton numero="7"/>
                    <Borrar1 numero="C"/>                 
                    </tr>
                    <Boton numero="4"/>
                    <Boton numero="5"/>
                    <Boton numero="6"/>
                    <BtnOpera numero="+"/>                  
                    <tr>
                    <Boton numero="1"/>
                    <Boton numero="2"/>
                    <Boton numero="3"/>
                    <BtnOpera numero="-"/>                   
                    </tr>
                    <tr>
                    
                    <Boton numero="0"/>                   
                    <BtnOpera numero="/"/>
                    <BtnOpera numero="*"/>
                    <Resultado numero="="/>
                    </tr>
                </table>
            </div>
        </Fragment>
    )
}
export default Contador