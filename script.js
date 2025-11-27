// ---- Animaciones flotantes ----

function crearElementoFlotante() {
    const contenedor = document.getElementById("animaciones");

    const elem = document.createElement("div");

    // 50% corazones / 50% rosas
    if (Math.random() > 0.5) {
        elem.classList.add("corazon");
        elem.textContent = "❤️";
    } else {
        elem.classList.add("rosa");
        elem.textContent = "🌹";
    }

    // Posición y tamaño
    elem.style.left = Math.random() * 100 + "vw";
    elem.style.fontSize = (Math.random() * 40 + 35) + "px"; 
    elem.style.animationDuration = (Math.random() * 3 + 4) + "s";

    contenedor.appendChild(elem);

    setTimeout(() => elem.remove(), 7000);
}

// más corazones
setInterval(crearElementoFlotante, 250);


// ---- Carta abriéndose ----

const sobre = document.getElementById("sobre");

sobre.addEventListener("click", () => {
    sobre.classList.toggle("abierto");
});
