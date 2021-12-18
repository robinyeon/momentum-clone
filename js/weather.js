const API_KEY = "67e89ae8d4e905928d8ca6bd9347dcda";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json()
            .then(data => {
                const weatherContainer = document.querySelector("#weather span:first-child");
                const cityContainer = document.querySelector("#weather span:last-child");
                weatherContainer.innerText = `${Math.round(data.main.temp)}°C / `;
                cityContainer.innerText = data.name;
            }));
}

function onGeoError() {
    alert("Can't find your location :(\nSo NO WEATHER for you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);