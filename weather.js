var name = document.querySelector('#name');
var temp = document.querySelector('.temp');
var infoCity = document.querySelector('.informationCity');
var description = document.querySelector('.cityDescription');



fetch('http://api.openweathermap.org/data/2.5/weather?q=jaragua%20do%20sul&appid=7626f7a0da26a618ae374a8bff8a14be')
.then(response => response.json())
.then(data => {
    	var nameCity = data['name'];
		var informationCity = data['sys']['country'];
		var tempCity = data['main']['temp'];
		var cityDescription = data['description'];

		name.innerHTML = nameCity;
		temp.innerHTML = tempCity;
		infoCity.innerHTML = informationCity;
		description.innerHTML = cityDescription;
  })