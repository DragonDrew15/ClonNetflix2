const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.movie2');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});





//TMDB 
const API_KEY = 'api_key=12ecd2d403bea6087511b36a0a39232f';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL+'/search/movie?'+API_KEY; 

const main = document.getElementById ('main');
const form = document.getElementById ('form');
const search = document.getElementById ('search');

getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data=>{
        console.log(data.results)
        showMovies(data.results);
    })
}


function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie =>{ 
        const { title, poster_path, vote_average, overview, cast, title_releast, releaste_date, } = movie;  
        const movieEl = document.createElement('div');  
        movieEl.classList.add('movie');  
        movieEl.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">           
            <div class="movie-info">  
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">  
                <p class="title-cast font-weight-bold">Cast</p>
                <p class="cast" id="cast">${cast}</p>
                <p class="title-release">${title_releast}</p>
                <p class="release date" id="release date">${releaste_date}</p>
                <h3>Overview</h3>
                ${overview}  
            </div> 
        `
        main.appendChild(movieEl);
    })
}

function getColor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    } else{return 'red'}
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }
    
})