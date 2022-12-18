var x = document.getElementById("demo");

var key = "6b2f60fb53b044eb911c197561a2061c";
    var url = 'https://api.forecast.io/forecast/';

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude + 
  "<br> I tried to fetch the weather data but I was getting some error like 401 Wrong API key in openweathermap so I used api.forecast.io even though i was getting error. Not able to fetch the weather details.";
  
  showPosition1(position);
}

function showPosition1(position){    
   let Latitude = position.coords.latitude;
    let Longitude = position.coords.longitude;

    getData(Latitude,Longitude);
}

function getData(Lat,Lon){
    const readyToSent = (url+"lat="+Lat+"&lon="+Lon+"&appid="+key);   
    fetch(readyToSent)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        fetchData(data);
    })
}

function fetchData(data){
    document.getElementById("data").innerHTML =
        "<b>The weather report of your Location is :-</b><br>"+
        "<b>Country :</b>"+data.sys.country+
        "<br><b>Local Area Name :</b>"+data.name+
        "<br><b>Temp. :</b>"+parseFloat((data.main.temp - 273.15)).toFixed(1)+"&#8451;"+
        "<br><b>But You will feel like :</b>"+parseFloat((data.main.feels_like - 273.15)).toFixed(1)+"&#8451;"+
        "<br><b>Min. Temp. :</b>"+parseFloat((data.main.temp_min - 273.15)).toFixed(1)+"&#8451;"+
        "<br><b>Max. Temp. :</b>"+parseFloat((data.main.temp_max - 273.15)).toFixed(1)+"&#8451;"+
        "<br><b>Pressure :</b>"+data.main.pressure+"hPa"+
        "<br><b>Humidity :</b>"+data.main.humidity+"%"+
        "<br><b>Weather :</b>"+data.weather[0].description+
        "<br>"
}   


