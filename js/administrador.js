import Pelicula from "./classPelicula.js";

//Variables globales
const btnAgregarPelicula = document.getElementById('btnCrearPelicula');
const modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'));
let crearPelicula = true;
const formularioPelicula = document.getElementById('formPelicula');
const codigo = document.getElementById('codigo');
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const anio = document.getElementById('anio');
const reparto = document.getElementById('reparto');
const director = document.getElementById('director');
const imagen = document.getElementById('imagen');
const genero = document.getElementById('genero');
const duracion = document.getElementById('duracion');
const pais = document.getElementById('pais');
const peliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || []


console.log(localStorage.getItem('listaPeliculasKey'));
console.log(peliculas);

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
    const peliculaNueva = new Pelicula(titulo.value, descripcion.value, imagen.value, genero.value, anio.value, duracion.value, pais.value, reparto.value, director.value)
    console.log(peliculaNueva)
    //almacenar el objeto en un array de peliculas
    peliculas.push(peliculaNueva);
    console.log(peliculas);
    //guardar el array en localstorage
    guardarLocalStorage();
    limpiarFormularioPelicula();

}

function guardarLocalStorage(){
    localStorage.setItem('listaPeliculasKey', JSON.stringify(peliculas));
}

function limpiarFormularioPelicula(){
    formularioPelicula.reset()
}

function cargaInicial(){
    //verificar si tengo pelis
    if(peliculas.length > 0){
        peliculas.map((peli)=> dibujarFila())
    }
}

function dibujarFila(){
    const tbody = document.querySelector('#tablaPelicula')
    tbody.innerHTML += `<tr>
    <th scope="row">1</th>
    <td>Guardianes de la galaxia Vol.3</td>
    <td class="col-descripcion">
      Po, quien se convertirá en el Maestro Espiritual del Valle de
      la Paz, busca a su sucesor como el nuevo Guerrero Dragón
      mientras lucha contra una nueva enemiga llamada "La Camaleona"
    </td>
    <td>
      <img
        class="img-thumbnail rounded img-fluid thumbnail"
        src="../img/Guardianes de la Galaxia Volumen 3.jpg"
      />
    </td>
    <td>Aventura</td>
    <td>
      <button
        class="btn btn-warning m-1"
        onclick=""
      >
        <i class="bi bi-pencil-square fs-4"></i>
      </button>
      <button
        class="btn btn-danger m-1"
        onclick=""
      >
        <i class="bi bi-x-square fs-4"></i>
      </button>
    </td>
  </tr>`
}

//logicas
btnAgregarPelicula.addEventListener('click', mostrarModalPelicula);
formularioPelicula.addEventListener('submit', administrarFormularioPelicula);
cargaInicial();