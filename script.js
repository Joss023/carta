const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const heartsContainer = document.querySelector('.hearts-container');
let heartInterval; // Control de generación de corazones

btnOpenElement.addEventListener('click', () => {
    const coverElement = document.querySelector('.cover');
    coverElement.classList.add('open-cover');
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.add('open-paper');
    paperElement.classList.remove('close-paper');

    // Inicia la generación de corazones
    heartInterval = setInterval(generateHearts, 300);
});

btnCloseElement.addEventListener('click', () => {
    const coverElement = document.querySelector('.cover');
    coverElement.classList.remove('open-cover');
    coverElement.style.zIndex = 'auto';

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');

    // Detiene la generación de corazones
    clearInterval(heartInterval);

    // Elimina corazones
    removeHearts();
});

function generateHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posición inicial desde abajo
    const maxX = window.innerWidth  + 1000; // Evita que se recorten
    heart.style.left = `${Math.random() * maxX}px`;
    heart.style.bottom = `200px`; // Aparecen desde abajo

    // Agregar el corazón al contenedor
    heartsContainer.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => heart.remove(), 100000);
}

function removeHearts() {
    heartsContainer.innerHTML = ''; // Elimina todos los corazones
}

function redirigir() {
    window.location.href = 'inicio.html';
}
