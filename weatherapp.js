fetch('https://api.openweathermap.org/data/2.5/weather?q=kiev&appid=ac26f8c23ad0c36539a6de9bbe9bb40d')

.then (function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.cityName').textContent = data.name;
    document.querySelector('.temp').textContent =  Math.round(data.main.temp - 273) + '°';
    document.querySelector('.discription').textContent = data.weather[0]['description'];
    document.querySelector('.ico').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.feels').innerHTML = 'feels like '+ Math.round(data.main.feels_like - 273)+ '°';

})


fetch('https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=ac26f8c23ad0c36539a6de9bbe9bb40d')

.then (function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.cityNamelviv').textContent = data.name;
    document.querySelector('.templviv').textContent =  Math.round(data.main.temp - 273) + '°';
    document.querySelector('.discriptionlviv').textContent = data.weather[0]['description'];
    document.querySelector('.icolviv').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.feelslviv').innerHTML = 'feels like '+ Math.round(data.main.feels_like - 273)+ '°';

})


fetch('https://api.openweathermap.org/data/2.5/weather?q=dnipro&appid=ac26f8c23ad0c36539a6de9bbe9bb40d')

.then (function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.cityNameDnipro').textContent = data.name;
    document.querySelector('.tempDnipro').textContent =  Math.round(data.main.temp - 273) + '°';
    document.querySelector('.discriptionDnipro').textContent = data.weather[0]['description'];
    document.querySelector('.icoDnipro').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.feelsDnipro').innerHTML = 'feels like '+ Math.round(data.main.feels_like - 273)+ '°';

})


fetch('https://api.openweathermap.org/data/2.5/weather?q=kharkiv&appid=ac26f8c23ad0c36539a6de9bbe9bb40d')

.then (function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.cityNameKharkiv').textContent = data.name;
    document.querySelector('.tempKharkiv').textContent =  Math.round(data.main.temp - 273) + '°';
    document.querySelector('.discriptionKharkiv').textContent = data.weather[0]['description'];
    document.querySelector('.icoKharkiv').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.feelsKharkiv').innerHTML = 'feels like '+ Math.round(data.main.feels_like - 273)+ '°';

})

fetch('https://api.openweathermap.org/data/2.5/weather?q=mariupol&appid=ac26f8c23ad0c36539a6de9bbe9bb40d')

.then (function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.cityNameMariupol').textContent = data.name;
    document.querySelector('.tempMariupol').textContent =  Math.round(data.main.temp - 273) + '°';
    document.querySelector('.discriptionMariupol').textContent = data.weather[0]['description'];
    document.querySelector('.icoMariupol').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.feelsMariupol').innerHTML = 'feels like '+ Math.round(data.main.feels_like - 273)+ '°';

})

.catch(function() {

});