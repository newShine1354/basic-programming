let time = document.getElementById('time')

setInterval(() => {
    let minutes = new Date().getMinutes()
    let hours = new Date().getHours()
    let seconds = new Date().getSeconds()
    let timeString = new Date().toTimeString()
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
    time.innerHTML = timeString;
}, 1000);

// Date Object 
console.log(new Date().getDate());
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());