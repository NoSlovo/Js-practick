let inputName = document.querySelector('#name');
let inputPassword = document.querySelector('#pasword');
let button = document.querySelector('.button');

button.onclick = function () {

    document.querySelector('#name').value;
    let form = document.querySelector('form');
    if (inputName.value == 0) 
    {
        event.preventDefault();
        document.querySelector("h2").innerHTML = "Заполните поля Имя"
    } 
    else if (inputName.value != " "){

        if (inputName.value == "Admin"){

        }else {
            document.querySelector("h2").innerHTML = "Не правльный логин"
            event.preventDefault();
            
        }
    }

    if(inputPassword.value == 0){
        event.preventDefault();
        document.querySelector("h2").innerHTML = "Заполните поля Пароля";
    }else if(inputPassword.value != " "){

        if (inputPassword.value == "Block"){

        }else{
            document.querySelector("h2").innerHTML = "Не правльный Пороль"
            event.preventDefault();
        }
    }
}