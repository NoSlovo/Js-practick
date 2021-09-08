
fetch('http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=9a2919f2b8a6e6e2ae9b376a53169a61')
.then(function (resp) { return resp.json()})
.then(function (data) {
    console.log(data);
    document.querySelector('.city-name').textContent = data.name;  
    document.querySelector('.price').innerHTML = Math.round((data.main.temp) - 290) + '&deg';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
})
.catch(function () {
    
})
 


