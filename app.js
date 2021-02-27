window.addEventListener('load', ()=>{
  let long;
  let lat;
  

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
             .then(data => {
               console.log(data);
               const {temp , summary} = data.currently
             })                 
          });
}
} )





// create and add rain aniamtion 
//create a selector for differernt cities