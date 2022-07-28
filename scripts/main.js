const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

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

////////////////////////////TMDB//////////////////////////////////
 


const API_KEY = '&api_key=580c12c0e5e7750e60a81c6bb5d745a1';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING = BASE_URL + '/trending/movie/week?' + API_KEY + '&language=es';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL+'/search/movie?'+API_KEY; 

const carousel1 = document.getElementById('carousel1');
const form = document.getElementById ('form');
const search = document.getElementById ('search');

getMovies(TRENDING);

function getMovies(url){
	fetch(url).then(res => res.json()).then(data => {
		showMovies(data.results);
	})
}

function showMovies(data){
	carousel1.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, overview, release_date} = movie;
		const movieElem = document.createElement('div');		
		movieElem.classList.add('pelicula');
		movieElem.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<p class="overview " id="overview"> "${overview}"</p>
				<p class="title-cast font-weight-bold">Cast</p>
				<p class="cast" id="cast">....</p>
				<p class="title-release">Release Date</p>
				<p class="release date" id="release date">"${release_date}"</p>
			</div>
		`

	carousel1.appendChild(movieElem);
	});
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(TRENDING);
    }
    
})