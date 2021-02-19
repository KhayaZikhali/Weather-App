if (navigator.geolocation){  
    console.log("position")    
      navigator.geolocation.getCurrentPosition(position => {
           console.log(position);
           console.log("please find out")
       })       
    }
