// const street = document.querySelector('#street')
// const neighborhood = document.querySelector('#neighborhood')
// const state = document.querySelector('#state')
// const city = document.querySelector("#city");


const cep = 58015435;
const url = `https://viacep.com.br/ws/${cep}/json/`

async function completarcep(){
    try{
        const resp = await fetch(url);
        if(resp.status === 200){
        const obj = await resp.json();
        console.log(obj);
        // street.value = obj.rua;
        // neighborhood.value = obj.bairro;
        // state.value = obj.uf;
        // city.value = obj.cidade;
    }
    }catch(error){
        console.log(error);

    }
    // console.log(resp)
}

completarcep();

