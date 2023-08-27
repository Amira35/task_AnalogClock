let handHours = document.querySelector('.hand-hours');
let handMintues = document.querySelector('.hand-mintues');

setInterval(setClock , (1000))

function setClock(){
    const now = new Date();

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360);
    handHours.style.transform = `rotate(${hourDegrees}deg)`;
 
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360);
    handMintues.style.transform = `rotate(${minsDegrees}deg)`;

}
setClock()
