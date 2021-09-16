'use strict'
let input = document.querySelector("input");
let button = document.querySelector('.cliar');
let buttonSum = document.querySelector('.sum');
let buttonBack = document.querySelector('.back')



function insert (num) { 
     input.value += num
 }

 button.onclick = () =>{
     input.value = ""
 }

 buttonSum.onclick = () =>{
     let exp = input.value;
     if(exp){
         input.value = eval(exp);
     }
 }


 buttonBack.onclick = () => {
     let string = input.value;
        input.value = string.substring(0,string.length - 1);
}
 
 
 





