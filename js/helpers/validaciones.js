export function cantidadCaracteres(input, min, max) {
    if (input.value.trim().length >= min && input.value.trim().length <= max) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      // input.classList.replace('is-invalid', 'is-valid')
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
    }
  }
  
  export function validarURLImagen(input) {
    const patron = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    if (patron.test(input.value)) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
    }
  }
  
  export const validarGenero = (genero) => {
    if (
      genero.value === "Accion" ||
      genero.value === "Drama" ||
      genero.value === "Comedia" ||
      genero.value === "Aventura" ||
      genero.value === "Terror"
    ) {
      genero.classList.remove("is-invalid");
      genero.classList.add("is-valid");
      return true;
    } else {
      genero.classList.remove("is-valid");
      genero.classList.add("is-invalid");
      return false;
    }
  };
  
  export function validarAnioCreacion(anio) {
    // Obtenemos el año actual
    const anioActual = new Date().getFullYear() + 1;
  
    // Verificamos si el año ingresado es un número válido y está dentro de un rango razonable (1895 corresponde al año de la primer pelicula proyectada)
    console.log(anio)
    if (!isNaN(anio.value) && anio.value >= 1895 && anio.value <= anioActual) {
      anio.classList.remove("is-invalid");
      anio.classList.add("is-valid");
      return true;
    } else {
      anio.classList.remove("is-valid");
      anio.classList.add("is-invalid");
      return false;
    }
  }
  
  export function validarMinutosPelicula(minutos) {
      // Verificamos si la duración es un número válido y si es mayor que cero
      if (!isNaN(minutos.value) && minutos.value >= 0 && minutos.value <= 900) {
          minutos.classList.remove("is-invalid");
          minutos.classList.add("is-valid");
      return true;
    } else {
      minutos.classList.remove("is-valid");
      minutos.classList.add("is-invalid");
      return false;
    }
  }
  
  export function validarCaracteresNoObligatorio(input, min, max) {
      if (input.value.trim().length > 0){
          if(input.value.trim().length >= min && input.value.trim().length <= max ){
              input.classList.remove("is-invalid");
              input.classList.add("is-valid");
              return true;
          }else{
              input.classList.remove("is-valid");
              input.classList.add("is-invalid");
              return false;
          }
      }
      input.classList.remove("is-invalid","is-valid");
    }