import Pelicula from "./classPelicula.js";


const peliculasJSON = localStorage.getItem('listaPeliculasKey');
const peliculas = JSON.parse(peliculasJSON);

if (peliculas) {
    const article = document.getElementById('card');
   
    peliculas.forEach(pelicula => {
       article.innerHTML +=  `<article class="col-12 col-md-4 col-lg-3 mb-3">
       <div class="card h-100">
         <img src=${pelicula.imagen} class="card-img-top"
           alt= ${pelicula.titulo}/>
         <div class="card-body">
           <h6 class="card-title">${pelicula.titulo}</h6>
         </div>
         <div class="card-footer">
           <button class="btn btn-primary">
             <a href="./pages/detalleGuardianesDeLaGalaxia.html" class="text-white text-decoration-none">Ver
               detalle</a>
           </button>
         </div>
       </div>
       </article>`
    });
   }

