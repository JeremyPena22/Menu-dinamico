// script.js
function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(sec => sec.classList.remove('activo'));

    // Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(seccion);
    seccionActiva.classList.add('activo');
}

function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('mostrar');
}
