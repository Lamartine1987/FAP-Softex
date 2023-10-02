const prompt = require('prompt-sync')()

function fatorial(n){
  if(n == 1 || n == 0){
    return 1;
  }else{
    return n * fatorial(n -1);
  }
}

let numero = parseInt(prompt("Digite um número: "));

if(numero){
  const resultado = fatorial(numero);
  console.log(`O fatorial do número ${numero} é igual a: ${resultado}`)
}else{
  console.log("Insira um número válido!")
}
  