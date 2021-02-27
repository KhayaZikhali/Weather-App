window.addEventListener('load', ()=>{
  // html div selectors 
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature')
  let temperatureDegree = document.querySelector('.temp-degree')
  let locationTimezone = document.querySelector('.location-timezone')

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude
    lat = position.coords.latitude
    console.log(long, lat)
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=09b84b72c1a51001e775ea6a92b67d58`
      fetch(api)
           .then(response => {
             return response.json()
            })
            // Shows the tempperature rounded down in degreess
             .then(data => {
               console.log(data.main);
               const temp = data.main.temp - 273.15;
               temperatureDegree.textContent = Math.floor(temp);
            })                 
        });
     }
} )





// create and add rain aniamtion 
//create a selector for differernt cities