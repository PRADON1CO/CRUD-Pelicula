class Pelicula {
    #id;
    #titulo;
    #descripcion;
    #imagen;
    #genero;
    #anio;
    #duracion;
    #pais;
    #reparto;
    #director;

    constructor(titulo, descripcion, imagen, genero, anio, duracion, pais, reparto, director) {
        this.#id = crypto.randomUUID();
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#genero = genero;
        this.#anio = anio;
        this.#duracion = duracion;
        this.#pais = pais;
        this.#reparto = reparto;
        this.#director = director;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(titulo) {
        this.#titulo = titulo;
    }

    get descripcion() {
        return this.#descripcion;
    }

    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    }

    get imagen() {
        return this.#imagen;
    }

    set imagen(imagen) {
        this.#imagen = imagen;
    }

    get genero() {
        return this.#genero;
    }

    set genero(genero) {
        this.#genero = genero;
    }

    get anio() {
        return this.#anio;
    }

    set anio(anio) {
        this.#anio = anio;
    }

    get duracion() {
        return this.#duracion;
    }

    set duracion(duracion) {
        this.#duracion = duracion;
    }

    get pais() {
        return this.#pais;
    }

    set pais(pais) {
        this.#pais = pais;
    }

    get reparto() {
        return this.#reparto;
    }

    set reparto(reparto) {
        this.#reparto = reparto;
    }

    get director(){
        return this.#director;
    }

    set director (director){
        this.#director = director;
    }

    //metodo utilizado
    toJSON(){
        return{
            id: this.id,
            titulo : this.titulo,
            descripcion : this.descripcion,
            imagen : this.imagen,
            genero : this.genero,
            anio:this.anio,
            duracion : this.duracion,
            pais : this.pais,
            reparto : this.reparto,
            director : this.director
        }
    }
}

export default Pelicula