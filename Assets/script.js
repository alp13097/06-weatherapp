
const time = document.getElementById("currentDay");

setInterval(() => {
    const now =  moment();
    const humanReadable = now.format('(M/MM/YYYY)');

    time.textContent = humanReadable;    
}, 1000)



let appId = "1b65b95a63673258b0b08917d8c9ef5c";
let units = "imperial";
let searchMethod;

function searchWeather(searchTerm) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {

}