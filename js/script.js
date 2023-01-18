let to = new Date('jan 1 2024 00:00:00');
function updateTime() {
    let from = new Date();
    diff = to - from;
    if (diff > 0) {
        let days = formatTime(Math.floor(diff / 1000 / 60 / 60 / 24)),
            hours = formatTime(Math.floor(diff / 1000 / 60 / 60) % 24),
            minutes = formatTime(Math.floor(diff / 1000 / 60) % 60),
            seconds = formatTime(Math.floor(diff / 1000) % 60)
        document.querySelector('#days').textContent = days
        document.querySelector('#hours').textContent = hours
        document.querySelector('#minutes').textContent = minutes
        document.querySelector('#seconds').textContent = seconds
    } else {
        clearInterval(interval);
    }
}

let interval = setInterval(updateTime, 1000)

function formatTime(argument) {
    return argument <= 9 ? '0' + argument : argument;
}