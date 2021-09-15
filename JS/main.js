"use strict";

let out = document.querySelector('.out');
let button =document.querySelector('button');
let result = document.querySelector(".result");
console.log(result)
let errorText = document.querySelector(".erro");






button.onclick = function convert ()  { 
    let inputOne  = out.value.toUpperCase();
    let inputTwo  = Number(result.value);
    console.log(inputTwo)
    inputOne.toUpperCase()
     switch(inputOne){
         case inputOne = "I":
             result.value = 1;
             errorText.innerHTML=""
             break;

        case inputOne = "V":
            result.value = 5;
            errorText.innerHTML=""
            break;

        case inputOne = 'X':
            result.value = 10;
            errorText.innerHTML=""
            break;

            case inputOne = 'L':
            result.value = 50;
            rrorText.innerHTML=" "
            break;

            case inputOne = 'C':
            result.value = 100;
            errorText.innerHTML=" "
            break;

            case inputOne = "D":
                result.value = 500;
                errorText.innerHTML=" "
                break
            case inputOne = "M":
                result.value = 1000;
                errorText.innerHTML=" "
                break
             default : 
             case inputTwo = 1:
                out.value ="I";
                errorText.innerHTML=" "
            break
            errorText.innerHTML= '<p class ="error">Введите другой символ</p>'
           
     }

 }




