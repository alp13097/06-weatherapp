
const time = document.getElementById("currentDay");

setInterval(() => {
    const now =  moment();
    const humanReadable = now.format('(M/MM/YYYY)');

    time.textContent = humanReadable;    
}, 1000)