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
    //dibujar la nueva peli en la tabla
    dibujarFila(peliculaNueva);
    //mostrar el mensaje al usuario
    Swal.fire({
        title: "Pelicula Creada",
        text: `La pelicula "${peliculaNueva.titulo}" fue crada correctamente`,
        icon: "success"
      });
    //modalPelicula.hide()
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
        peliculas.map((pelicula)=> dibujarFila(pelicula))
    }
}

function dibujarFila(pelicula){
    console.log(pelicula)
    const tbody = document.querySelector('#tablaPelicula')
    tbody.innerHTML += `<tr>
    <th scope="row">${pelicula.id}</th>
    <td>${pelicula.titulo}</td>
    <td class="col-descripcion">
      ${pelicula.descripcion}
    </td>
    <td>
      <img
        class="img-thumbnail rounded img-fluid thumbnail"
        src=${pelicula.imagen}
        alt=${pelicula.titulo}
      />
    </td>
    <td>${pelicula.genero}</td>
    <td>
      <button
        class="btn btn-warning m-1"
        onclick=""
      >
        <i class="bi bi-pencil-square fs-4"></i>
      </button>
      <button
        class="btn btn-danger m-1"
        onclick="borrarPelicula('${pelicula.id}')"
      >
        <i class="bi bi-x-square fs-4"></i>
      </button>
    </td>
  </tr>`
}

window.borrarPelicula = (idPelicula) => { 
  console.log('aqui tengo que borar una peli');
  console.log(idPelicula);
  //buscar la posicion de la peli dentro del array que quiero borrar findIndex()
  const  posicionPeli = peliculas.findIndex((itemPelicula)=> itemPelicula.id === idPelicula)
  console.log(posicionPeli)
  //usar splice es una opcion para borrar una peli de array
  peliculas.splice(posicionPeli, 1)
  //actualizar el localStorage
  guardarLocalStorage();
  //actualizar la tabla
  const tbody = document.querySelector('#tablaPelicula')
  tbody.removeChild(tbody.children[posicionPeli])
  
}

//logicas
btnAgregarPelicula.addEventListener('click', mostrarModalPelicula);
formularioPelicula.addEventListener('submit', administrarFormularioPelicula);
cargaInicial();

