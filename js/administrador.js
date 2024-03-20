//Variables globales
const btnAgregarPelicula = document.getElementById('btnCrearPelicula');
const modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'));



//funciones
function mostrarModalPelicula(){
    modalPelicula.show();
}



//logicas
btnAgregarPelicula.addEventListener('click', mostrarModalPelicula)
