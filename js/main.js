const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const handPlayer = document.querySelector(".hand__player");
const handCPU = document.querySelector(".hand__cpu");
const btnListo = document.querySelector(".post");
const chooseRPS = document.querySelectorAll(".choose-rps");
const puntosUser = document.getElementById("puntos-user");
const puntosCPU = document.getElementById("puntos-cpu");
const textChoose = document.getElementById("text-choose");
const btnGanaste = document.querySelector(".post-ganaste");
const btnPerdiste = document.querySelector(".post-perdiste");
const hand = document.querySelector(".hand");
const sectionChoose = document.querySelector(".choose");

let intervaloHandCPU;
let intervaloHandPlayer;
let puntuacionUser = 0;
let puntuacionCPU = 0;

intervalos();

btnListo.addEventListener("click", () => {
    
    hand.style.justifyContent = "space-between";
    $(".post").hide("ease-in-out");
    chooseRPS.forEach((item) => {
        item.style.cursor = "pointer";
    });

    rock.addEventListener("click", (e) => {
        clearInterval(intervaloHandCPU);
        clearInterval(intervaloHandPlayer);
        const eleccionUser = e.currentTarget.id;
        const eleccionPC = conversor();
        handPlayer.innerHTML = `
        <img src="img/${eleccionUser}-128px.png" alt="Mano del jugador">
        `;
        handCPU.innerHTML = `
        <img src="img/${eleccionPC}-128px.png" alt="Mano del jugador">
        `;
        puntos(eleccionUser, eleccionPC);
    });

    paper.addEventListener("click", (e) => {
        clearInterval(intervaloHandCPU);
        clearInterval(intervaloHandPlayer);
        const eleccionUser = e.currentTarget.id;
        const eleccionPC = conversor();
        handPlayer.innerHTML = `
        <img src="img/${eleccionUser}-128px.png" alt="Mano del jugador">
        `;
        handCPU.innerHTML = `
        <img src="img/${eleccionPC}-128px.png" alt="Mano del jugador">
        `;
        puntos(eleccionUser, eleccionPC);
    });

    scissor.addEventListener("click", (e) => {
        clearInterval(intervaloHandCPU);
        clearInterval(intervaloHandPlayer);
        const eleccionUser = e.currentTarget.id;
        const eleccionPC = conversor();
        handPlayer.innerHTML = `
        <img src="img/${eleccionUser}-128px.png" alt="Mano del jugador">
        `;
        handCPU.innerHTML = `
        <img src="img/${eleccionPC}-128px.png" alt="Mano del jugador">
        `;
        puntos(eleccionUser, eleccionPC);
    });

});



function conversor() {
    const eleccionPC = Math.ceil(Math.random() * 3);
    let eleccionPCCode;
    if (eleccionPC == 1) {
        eleccionPCCode = "rock";
    } else if (eleccionPC == 2) {
        eleccionPCCode = "paper";
    } else {
        eleccionPCCode = "scissor";
    }
    return eleccionPCCode;
}

function puntos(eleccionUser, eleccionPC) {
    if (eleccionUser == "rock" && eleccionPC == "scissor") {
        puntosUser.innerText = puntuacionUser++ + 1;
        textChoose.innerText = "¡Ganaste un punto! 😄";
    } else if (eleccionUser == "rock" && eleccionPC == "paper") {
        puntosCPU.innerText = puntuacionCPU++ + 1;
        textChoose.innerText = "¡La PC ganó un punto! 😫";
    } else if (eleccionUser == "paper" && eleccionPC == "rock") {
        puntosUser.innerText = puntuacionUser++ + 1;
        textChoose.innerText = "¡Ganaste un punto! 😄";
    } else if (eleccionUser == "paper" && eleccionPC == "scissor") {
        puntosCPU.innerText = puntuacionCPU++ + 1;
        textChoose.innerText = "¡La PC ganó un punto! 😫";
    } else if (eleccionUser == "scissor" && eleccionPC == "rock") {
        puntosCPU.innerText = puntuacionCPU++ + 1;
        textChoose.innerText = "¡La PC ganó un punto! 😫";
    } else if (eleccionUser == "scissor" && eleccionPC == "paper") {
        puntosUser.innerText = puntuacionUser++ + 1;
        textChoose.innerText = "¡Ganaste un punto! 😄";
    } else {
        textChoose.innerText = "¡Empate! 🙄";
    }
    ganador();
}

function ganador() {
    if (puntuacionUser == 5) {
        confeti();
        textChoose.innerText = "Click en el boton para volver a jugar 😉";
        btnGanaste.style.display = "block";
        sectionChoose.style.display = "none";
        
        btnGanaste.addEventListener("click", () => {
            resetPuntos();
            intervalos();
            btnGanaste.style.display = "none";
            sectionChoose.style.display = "flex";
        });
    } else if (puntuacionCPU == 5) {
        textChoose.innerText = "Click en el boton para volver a jugar 😉";
        btnPerdiste.style.display = "block";
        sectionChoose.style.display = "none";

        btnPerdiste.addEventListener("click", () => {
            resetPuntos();
            intervalos();
            btnPerdiste.style.display = "none";
            sectionChoose.style.display = "flex";
        });
    }
}

function intervalos() {

    clearInterval(intervaloHandCPU);
    clearInterval(intervaloHandPlayer);

    intervaloHandCPU = setInterval(() => {
        handCPU.innerHTML = `
        <img src="img/${conversor()}-128px.png" alt="Mano del jugador">
        `;
    }, 350);

    intervaloHandPlayer = setInterval(() => {
        handPlayer.innerHTML = `
        <img src="img/${conversor()}-128px.png" alt="Mano del jugador">
        `;
    }, 350);
}

function resetPuntos() {
    puntosUser.innerText = "0";
    puntosCPU.innerText = "0";
    puntuacionCPU = 0;
    puntuacionUser = 0;
    textChoose.innerText = "Elegí: Piedra, papel o tijera";
}

function confeti() {
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
    });
}
