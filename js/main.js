function validaIdade(idade){
    if(idade>=18){
        return true;
    } else {
        return false;
    }
}

let idade = prompt("Qual é sua idade?");
console.log(validaIdade(idade));