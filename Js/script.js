// Script para cambiar entre secciones del menú
const enlaces = document.querySelectorAll('.menu a');
const secciones = document.querySelectorAll('.contenido');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();

    // Quitar clase activa de todos los enlaces
    enlaces.forEach(a => a.classList.remove('active'));

    // Agregar clase activa al enlace clicado
    enlace.classList.add('active');

    // Mostrar solo la sección seleccionada
    const id = enlace.getAttribute('data-section');
    secciones.forEach(sec => {
      sec.classList.remove('visible');
      if (sec.id === id) sec.classList.add('visible');
    });
  });
});
