function setDate() {
    const now = new Date();

    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const sec = now.getSeconds();
    const min = now.getMinutes();    
    const hours = now.getHours();

    const secDegrees = ((sec / 60) * 360) + 90;
    const minDegrees = ((min / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);