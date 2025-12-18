'use client'

import { useState } from "react";
import ProcurarCep from "./cep";

export default function Forms(){
  const [cep,setCep] = useState("")
        const[endereco,setEndereco] = useState({
            logradouro: '',
            numero: '',
            bairro:'',
            cidade: '',
            uf:'',
        });

    function confirmacao(e){
        console.log(endereco)
        alert("Cadastro do endereço foi um sucesso!");
    }

    function verificacao(){
      if(cep.length !== 8 && cep.length !== 0) return true
      else return false;
    }

    return (
        <form onSubmit={confirmacao}>
      <h2>Address</h2>
      <div className="row">
        <ProcurarCep setEndereco={setEndereco} />
      </div>

      <div className="row">
        <input 
        type="text"  
        placeholder="Rua" 
        value={endereco.logradouro} 
        onClick={verificacao}
        />
      </div>

      <div className="row">
        <input 
        type="text"  
        placeholder="Número"
        value={endereco.numero}
        onChange ={(e) => setEndereco({...endereco,numero: e.target.value})}
        onClick={verificacao}
        />
        
      </div>

      <div className="row">
        <input 
        type="text" 
        placeholder="Bairro" 
        value={endereco.bairro} 
        onClick={verificacao}
        />
      </div>

      <div className="row">
        <input 
        type="text" 
        placeholder="Estado" 
        value={endereco.uf} 
        onClick={verificacao}
        />
      </div>

      <div className="row">
        <input 
        type="text" 
        placeholder="Cidade" 
        value={endereco.cidade} 
        onClick={verificacao}
        />
      </div>
    </form>
    )
}