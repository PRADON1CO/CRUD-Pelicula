import Pelicula from "./classPelicula.js";

//Variables globales
const btnAgregarPelicula = document.getElementById('btnCrearPelicula');
const modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'));
let crearPelicula = true;
const formularioPelicula = document.getElementById('formPelicula');


//funciones
function mostrarModalPelicula(){
    crearPelicula = true;
    modalPelicula.show();
}

function administrarFormularioPelicula(e){
    //aqui decidimos si estamos creando o editando una pelicula
    e.preventDefault();
    if(crearPelicula === true){
        //estoy creando la peli
        creandoPelicula()
    }else{
        //estoy editando la peli
    }
}

function creandoPelicula(){
    console.log('aqui tengo que crear una peli');
    //todo: validar los datos
    //crear un objeto Pelicula
    const peliculaNueva = new Pelicula('Al filo de la mañana','tipo que vive en un bucle','https://pics.filmaffinity.com/edge_of_tomorrow-632023834-large.jpg', 'Acción', 2014, 73, 'EEUU', 'Tom Cruise', 'Doug Liman')
    console.log(peliculaNueva)
    //almacenar el objeto en un array de peliculas
    //guardar el array en localstorage

}


//logicas
btnAgregarPelicula.addEventListener('click', mostrarModalPelicula);
formularioPelicula.addEventListener('submit', administrarFormularioPelicula);