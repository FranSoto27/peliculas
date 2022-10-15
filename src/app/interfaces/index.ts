export interface PeliculasResponse {
    ok:        boolean;
    peliculas: Pelicula[];
}

export interface Pelicula {
    _id:       string;
    nombre:    string;
    director:  string;
    categoria: string;
    imagen:    string;
    __v:       number;
}