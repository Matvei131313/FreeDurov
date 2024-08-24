let startTime = Date.now();

function updateTimer() {
    let elapsedTime = Date.now() - startTime;
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);

    // Форматирование времени в формат HH:MM:SS
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
}

// Обновляем таймер каждую секунду
setInterval(updateTimer, 1000);

// Инициализация WebApp
Telegram.WebApp.ready();
