const pResultado = document.querySelector ("#resultado");

let contador = 0;

function calcular(){
console.log ("prueba");
contador=contador+1;
pResultado.innerHTML = contador;

}

function reiniciar(){
    contador=0;
    pResultado.innerHTML = contador;
}

function restar(){
    contador=contador-1;
    pResultado.innerHTML = contador;
}

