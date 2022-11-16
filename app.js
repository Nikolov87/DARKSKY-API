window.addEventListener('load', ()=> {

  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
    );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureTimezone = document.querySelector(".location-timezone");


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

        fetch(api)
         .then(response => {
          return response.json();
         })
          .then(data => {
            const { temperature, summary } = data.currently;
            //Set DOM Elements from the API
            temperatureDegree.textContent = temperature;
            temperatureDegree.textContent = summary;
            locationTimezone.textContent = data.timezone;

           
          });
    });
  }
});