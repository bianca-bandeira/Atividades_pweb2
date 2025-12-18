'use client'

import { useEffect, useState } from "react";

export default function ProcurarCep({setEndereco}){

    function verificacao(){
      if(cep.length !== 8 && cep.length !== 0) return true
      else return false;
    }

    const [cep, setCep] = useState("");
    const [error,setError] = useState('');

    useEffect(() => {
        if(cep.length !== 8){
            return;
        }

    async function requisicao() {

        try{
            const value = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if(value.status === 200){
                const obj = await value.json();
                console.log(obj)

                if(obj.erro){
                    throw new Error("cep inválido!")
                }

                setEndereco((prev) => ({
                    ...prev,
                    logradouro: obj.logradouro,
                    bairro: obj.bairro,
                    cidade: obj.localidade,
                    uf: obj.uf,
                }));
            }
        }catch(error){
            setError(error.message)
        }

    }

    requisicao();
},[cep, setEndereco]);
   
    return(
        <div>
        <input
        type="text"
        placeholder="Digite o cep"
        value={cep}
        onChange={(e) => {
            setCep(e.target.value)
            setError("")}
        }
        />

        {error && <p className="text-3xl">{error}</p>}
        </div>
    )

}