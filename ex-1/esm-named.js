export function area(raio){
    return Math.PI*(raio**2)
}

export function calculadora(v1,v2,s){
    if(s == "+")return v1+v2
    else if(s == "-")return v1-v2
    else if(s == "/")return v1/v2
    else if(s == "*") return v1*v2
    else return "operador inválido"
}

