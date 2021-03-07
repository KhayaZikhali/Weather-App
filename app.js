window.addEventListener('load', ()=> {
  // html div selectors
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temp-description');
  let temperatureDegree = document.querySelector('.temp-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let temperatureSection = document.querySelector('.temperature');
  const temperatureSpan = document.querySelector('.temperature .degree-section span');

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
               console.log(data.weather[0].icon);
               const temp = data.main.temp;
               temperatureDegree.textContent = Math.floor(temp - 273.15);
               temperatureDescription.textContent = data.weather[0].description.toUpperCase();
               locationTimezone.textContent = data.sys.country + " / " + data.name;
               //set Icon function 
               setIcon(data.weather[0].icon , document.querySelector(".icon"))
               //toggle temperature from Celsius to Fahrenheit
                temperatureSection.addEventListener("click" , () => {
                  if(temperatureSpan.textContent === "˚C"){
                    // convert Kelvin to Fahrenheit 
                    let fahreToKelvin = temp * 9/5 - 459.67;
                    temperatureDegree.textContent = fahreToKelvin.toFixed(1);
                    temperatureSpan.textContent = "F";
                  } else if (temperatureSpan.textContent === "F"){
                    //convert Fahrenheit to celsius
                    temperatureDegree.textContent = Math.floor(temp - 273.15);
                    temperatureSpan.textContent = "˚C";
                  }
                })
            })                 
        });
     }

     function setIcon(icon, iconId){
       var skycons = new Skycons({color : "white"})
       var currentIcon = icon.replace(/-/g,"_").toUpperCase();
       skycons.play();
       return skycons.set(iconId , Skycons[currentIcon])
      }
    });


    // function to change from one measurement to another
    function metric(temp){

    }



// create and add rain aniamtion 
//create a selector for differernt cities