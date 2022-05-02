var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var pres = document.querySelector('.pres');
var hum = document.querySelector('.hum');
var wind = document.querySelector('.wind');
var sunr = document.querySelector('.sunr');
var suns = document.querySelector('.suns');

button.addEventListener('onclick', function(){
    fetch(https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a14cd960222cfa2d5c27fe7727ed2307)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innerhtml = nameValue
        temp.innerhtml = tempValue
        desc.innerHTML = descValue
    })

    .catch(err => alert("wrong city name!"))
})
