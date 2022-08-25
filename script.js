const h1 = document.querySelector('h1'); 

const input1 = document.querySelector('#calculo');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', eventSumar);

function eventSumar(event){
   event.preventDefault();
   let resultado =  parseInt(input1.value) + parseInt(input2.value) ;
   pResult.innerText = "Resultado: " + resultado;
}