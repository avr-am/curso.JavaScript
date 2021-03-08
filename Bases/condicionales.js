/* OPERADORES LÓGICOS
|| OR
&& AND
==  ===
!= !==
!
bool -> true/false */

var number1 = 23
var number2 = 30

if(number2 && number1){ // mejor el === / !== porque combierten los datos de texto a string o al reves y después los compara
    console.log('pass')
}else if (number1 > number2){
    console.log('el numero 1 es mayor')
}else{
    console.log('not pass')
}
