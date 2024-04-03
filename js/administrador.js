import Pelicula from "./classPelicula.js";
import {cantidadCaracteres,validarAnioCreacion, validarCaracteresNoObligatorio, validarGenero, validarMinutosPelicula, validarURLImagen } from"../js/helpers/validaciones.js";

//Variables globales
const btnAgregarPelicula = document.getElementById("btnCrearPelicula");
const modalPelicula = new bootstrap.Modal(document.getElementById("modalPelicula"));
let crearPelicula = true;
const formularioPelicula = document.getElementById("formPelicula");
const codigo = document.getElementById("codigo");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const anio = document.getElementById("anio");
const reparto = document.getElementById("reparto");
const director = document.getElementById("director");
const imagen = document.getElementById("imagen");
const genero = document.getElementById("genero");
const duracion = document.getElementById("duracion");
const pais = document.getElementById("pais");
const peliculas = JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];

console.log(localStorage.getItem("listaPeliculasKey"));
console.log(peliculas);

const userAdmin={
  email: 'admin@admin',
  password: '1Ss2312'
}

//funciones
function mostrarModalPelicula() {
  crearPelicula = true;
  limpiarFormularioPelicula();
  modalPelicula.show();
}

function administrarFormularioPelicula(e) {
  //aqui decidimos si estamos creando o editando una pelicula
  e.preventDefault();
  if (crearPelicula === true) {
    //estoy creando la peli
    creandoPelicula();
  } else {
    //estoy editando la peli
    editarPelicula();
  }
}

function creandoPelicula() {
  console.log("aqui tengo que crear una peli");
  //todo: validar los datos
  if(cantidadCaracteres(titulo, 2, 60) && cantidadCaracteres(descripcion, 2,300) && validarURLImagen(imagen) && validarGenero(genero) && cantidadCaracteres(director, 2,200) &&
  validarAnioCreacion(anio) && validarMinutosPelicula(duracion) && validarCaracteresNoObligatorio(pais,2,20) && validarCaracteresNoObligatorio(reparto,2,200)){
     //crear un objeto Pelicula
  const peliculaNueva = new Pelicula(
    titulo.value,
    descripcion.value,
    imagen.value,
    genero.value,
    anio.value,
    duracion.value,
    pais.value,
    reparto.value,
    director.value
  );
  console.log(peliculaNueva);
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
    icon: "success",
  });
  }else{
    
  }
  //modalPelicula.hide()
}

function guardarLocalStorage() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(peliculas));
}

function limpiarFormularioPelicula() {
  formularioPelicula.reset();
  //limpiar las clases de titulo y textrea
}

function cargaInicial() {
  //verificar si tengo pelis
  if (peliculas.length > 0) {
    peliculas.map((pelicula) => dibujarFila(pelicula));
  }
}

function dibujarFila(pelicula) {
  console.log(pelicula);
  const tbody = document.querySelector("#tablaPelicula");
  tbody.innerHTML += `<tr data-id="${pelicula.id}">
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
        onclick="prepararEditarPelicula('${pelicula.id}')"
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
  </tr>`;
}

window.borrarPelicula = (idPelicula) => {
  Swal.fire({
    title: "¿Estas seguro de borra la pelicula?",
    text: "No puedes revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //aqui agrego todo el codigo para borar
      //buscar la posicion de la peli dentro del array que quiero borrar findIndex()
      const posicionPeli = peliculas.findIndex(
        (itemPelicula) => itemPelicula.id === idPelicula
      );
      console.log(posicionPeli);
      //usar splice es una opcion para borrar una peli de array
      peliculas.splice(posicionPeli, 1);
      //actualizar el localStorage
      guardarLocalStorage();
      //actualizar la tabla
      const tbody = document.querySelector("#tablaPelicula");
      tbody.removeChild(tbody.children[posicionPeli]);
      Swal.fire({
        title: "Pelicula Eliminada",
        text: `La pelicula fue eliminada corractamente`,
        icon: "success",
      });
    }
  });
};

window.prepararEditarPelicula = (idPelicula) => {
  mostrarModalPelicula();
  crearPelicula = false;
  const peliBuscada = peliculas.find((pelicula) => pelicula.id === idPelicula);
  //cargo los datos en el formulario
  codigo.value = peliBuscada.id;
  titulo.value = peliBuscada.titulo;
  descripcion.value = peliBuscada.descripcion;
  genero.value = peliBuscada.genero;
  imagen.value = peliBuscada.imagen;
  pais.value = peliBuscada.pais;
  anio.value = peliBuscada.anio;
  reparto.value = peliBuscada.reparto;
  duracion.value = peliBuscada.duracion;
  director.value = peliBuscada.director;
};

function editarPelicula() {
  //1- buscaria la posicion de la pelicula en el array
  let posicionPelicula = peliculas.findIndex(
    (pelicula) => pelicula.id === codigo.value
  );
  //2- editar los valores de la pelicula dentroe del array
  peliculas[posicionPelicula].titulo = titulo.value;
  peliculas[posicionPelicula].imagen = imagen.value;
  peliculas[posicionPelicula].descripcion = descripcion.value;
  peliculas[posicionPelicula].imagen = imagen.value;
  peliculas[posicionPelicula].genero = genero.value;
  peliculas[posicionPelicula].pais = pais.value;
  peliculas[posicionPelicula].duracion = duracion.value;
  peliculas[posicionPelicula].reparto = reparto.value;
  peliculas[posicionPelicula].director = director.value;
  //3- actualizar el localstorage
  guardarLocalStorage();
  //4-actualizar la fila
  const tbody = document.querySelector("#tablaPelicula");
  tbody.children[posicionPelicula].children[1].innerHTML = titulo.value;
  tbody.children[posicionPelicula].children[2].innerHTML = descripcion.value;
  tbody.children[posicionPelicula].children[3].children[0].src = imagen.value;
  tbody.children[posicionPelicula].children[4].innerHTML = genero.value;
  //5-mostrar un cartel al usuario
  Swal.fire(
    "Pelicula modificada",
    "La pelicula fue modificada exitosamente",
    "success"
  );
  //6- limpiar el formulario y cerrar el modal
  limpiarFormularioPelicula();
  modalPelicula.hide();
}

//logicas
btnAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);

cargaInicial();