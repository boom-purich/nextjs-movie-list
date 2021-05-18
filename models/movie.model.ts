export class Movie {
    id?:string;
    title?:string;
    genres?: Array<Genre> = [];
    backdrop_path?: string;
    poster_path?:string;
    original_language?:string;
    original_title?:string;
    release_date?:string;
    overview?:string;
    tagline?:string;
    spoken_languages?: Array<SpokenLanguages> = [];
}

export class Genre {
    id:Number;
    name:string;
}

export class SpokenLanguages {
    iso_639_1:string;
    english_name:string;
    name:string;
}

export class MovieModalData {
    isShowModal:boolean;
    setIsShowModal:any;
    movieData?:Movie;
}

export class MovieList {
    headerName:string = '';
    movieList:Array<Movie> = [];
    loading:boolean = true;

    constructor(header:string) {
        this.headerName = header;
    }
}