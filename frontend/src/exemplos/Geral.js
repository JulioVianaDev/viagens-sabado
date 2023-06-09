import FunctionSimples from "./components/FunctionSimples";
import FunctionDupla from "./components/FunctionDupla";
import Botao from "./layout/Botao";
import {useState,useEffect} from 'react';
function Geral(){
  const [variavel,FunctionMudarVariavel]= useState(false)
  const Logar = ()=>{
    FunctionMudarVariavel(true)
  } 
  const Deslogar = ()=>{
    FunctionMudarVariavel(false)
  }

  useEffect(()=>{
    console.log("renderizei a primeira vez")
  },[variavel])
  function Ola(){
    console.log("ola")
  }
  return(
    <>
      <FunctionSimples/>
      <FunctionDupla/>
      {
        variavel ? <p>logado</p> : <p>Deslogado</p>
      }
      <Botao tarefa={Logar} classe="botao purple"> Entrar </Botao>
      <Botao tarefa={Deslogar} classe="botao blue"> Sair </Botao>
      <Botao tarefa={Ola} classe="botao red"> Começou </Botao>
    </>
  )
}

export default Geral;