
const time = document.getElementById("currentDay");

setInterval(() => {
    const now =  moment();
    const humanReadable = now.format('(M/MM/YYYY)');

    time.textContent = humanReadable;    
}, 1000)



let appId = "1b65b95a63673258b0b08917d8c9ef5c";
let units = "imperial";
let searchMethod;

function getSearchMethod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
        searchMethod = "zip";
    } else {
        searchMethod = "q";
    }
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("Assets/Photos/clear.jpg")';
            break;

        case 'Clouds':
            document.body.style.backgroundImage = 'url("Assets/Photos/cloudy.jpg")';
            break;

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("Assets/Photos/rain.jpg")';
            break;

        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("Assets/Photos/storm.jpg")';
            break;

        case 'Snow':
            document.body.style.backgroundImage = 'url("Assets/Photos/snow.jpg")';
            break;
    
        default:
            document.body.style.backgroundImage = 'url("Assets/Photos/clear.jpg")';
            break;
    }

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');
    let uVIndex = document.getElementById('UV-Index');

    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';
}

document.getElementById("searchBtn").addEventListener("click", () => {
    let searchTerm = document.getElementById("searchInput").value;
    if(searchTerm) {
        searchWeather(searchTerm);
    }
})