let hojaActiva = null;
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

function mostrarDetalle(hoja) {
    if (hojaActiva) {
        hojaActiva.classList.remove('activa');
        hojaActiva = null;
        overlay.style.display = 'none';
    } else {
        hoja.classList.add('activa');
        hojaActiva = hoja;
        overlay.style.display = 'block';
    }
}

overlay.addEventListener('click', () => {
    if (hojaActiva) {
        hojaActiva.classList.remove('activa');
        hojaActiva = null;
        overlay.style.display = 'none';
    }
});
