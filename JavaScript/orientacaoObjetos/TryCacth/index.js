const prompt = require("prompt-sync")()

function divisao(num1, num2){
    return num1/num2;
}

let numero1 = parseInt(prompt("Digite o 1° número: "))
let numero2 = parseInt(prompt("Digite o 2° número: "))

try{
    const resultado = divisao(numero1, numero2)
    console.log(resultado);
}catch(error){
    console.log("A divisão não pode ser efetuada!", error.message)
}finally{
    console.log("O sistema encerrou!")
}  


