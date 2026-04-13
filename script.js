let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;
document.getElementById("botao").addEventListener("click", conferir);

function conferir(){
   let numero = Number(document.getElementById('numero').value);
   let resposta = document.getElementById('resposta');

   if (tentativas <= 1) {
        resposta.innerText = "Suas tentativas acabaram, o numero que eu pensava era " +numeroAleatorio;
        return;
    }
      tentativas --;

   
    if (numero > numeroAleatorio){
        resposta.innerText = "Muito alto | Tentativas restantes " +tentativas;
    }
    else if (numero < numeroAleatorio){
        resposta.innerText = "Muito baixo | Tentativas restantes " +tentativas;
    } else {
        resposta.innerText = "Isso mesmo, você acertou!";
        return;
    }

    document.getElementById("reiniciar").addEventListener("click", reiniciarJogo);
    
   }
   
   function reiniciarJogo(){
    numeroAleatorio = Math.floor(Math.random() * 20) + 1;
    tentativas = 10;

    document.getElementById('resposta').innerText = "";
    document.getElementById('numero').value = "";
}
   
   
    