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
// const TRENDING = BASE_URL + '/discover/movie?sort_by=popularity.desc&language=es'+API_KEY;
const TRENDING = BASE_URL + '/trending/movie/week?' + API_KEY + '&language=es';
const THEATERS = BASE_URL + '/trending/movie/day?' + API_KEY + '&language=es';
const DRAMA = BASE_URL + '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10' + API_KEY + '&language=es';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL+'/search/movie?'+API_KEY; 



const form = document.getElementById ('form');
const search = document.getElementById ('search');


getMovies(TRENDING);

function getMovies(url){
	fetch(url).then(res => res.json()).then(data => {
		// console.log(data);
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


getMovies2(THEATERS);

function getMovies2(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies2(data.results);
	})
}

function thetMovies2(data){
	carousel2.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
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

	carousel2.appendChild(movieEl);
	});
}


getMovies3(DRAMA);

function getMovies3(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies3(data.results);
	})
}

function thetMovies3(data){
	carousel3.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
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

	carousel3.appendChild(movieEl);
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