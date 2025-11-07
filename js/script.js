// Script para cambiar entre secciones
const enlaces = document.querySelectorAll('.menu-lateral a');
const secciones = document.querySelectorAll('.seccion');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();

    // Quitar clase activa a todos los enlaces
    enlaces.forEach(a => a.classList.remove('activo'));

    // Activar el enlace seleccionado
    enlace.classList.add('activo');

    // Mostrar solo la sección correspondiente
    const id = enlace.getAttribute('data-section');
    secciones.forEach(sec => {
      sec.classList.remove('visible');
      if (sec.id === id) sec.classList.add('visible');
    });
  });
});
