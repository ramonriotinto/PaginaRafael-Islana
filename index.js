const slides = document.querySelector('.slides');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`; 
}

setInterval(nextSlide, 3000);

///

const targetDate = new Date("2024-01-06");
const countdownContainer = document.getElementById('countdown_container');

function updateCountdown() {
    const now = new Date();
    const past = now < targetDate ? now : targetDate;
    const future = now >= targetDate ? now : targetDate;

    let years = future.getFullYear() - past.getFullYear();
    let months = future.getMonth() - past.getMonth();
    let days = future.getDate() - past.getDate();
    let hours = future.getHours() - past.getHours();
    let minutes = future.getMinutes() - past.getMinutes();
    let seconds = future.getSeconds() - past.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const previousMonth = new Date(future.getFullYear(), future.getMonth(), 0).getDate(); // Dias no mês anterior
        days += previousMonth;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    countdownContainer.innerHTML = `
      <p>Anos: ${years}</p>
      <p>Meses: ${months}</p>
      <p>Dias: ${days}</p>
      <p>Horas: ${hours}</p>
      <p>Minutos: ${minutes}</p>
      <p>Segundos: ${seconds}</p>
    `;
}

setInterval(updateCountdown, 1000);