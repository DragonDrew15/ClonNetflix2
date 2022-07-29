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
const DAY = BASE_URL + '/trending/movie/day?' + API_KEY + '&language=es';
const DRAMA = BASE_URL + '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10' + API_KEY + '&language=es';
const KIDS = BASE_URL + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc' + API_KEY + '&language=es';
const RATED = BASE_URL + '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc' + API_KEY + '&language=es';
const ACTION = BASE_URL + '/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc' + API_KEY + '&language=es';
const FANTASY = BASE_URL + '/discover/movie?with_genres=18&primary_release_year=2014' + API_KEY + '&language=es';
const COMEDIA = BASE_URL + '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc' + API_KEY + '&language=es';
const CINE = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22' + API_KEY + '&language=es';
const MARA = BASE_URL + '/discover/movie?with_people=108916,7467&sort_by=popularity.desc' + API_KEY + '&language=es';

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
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieElem = document.createElement('div');		
		movieElem.classList.add('pelicula');
		movieElem.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
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


getMovies2(DAY);

function getMovies2(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies2(data.results);
	})
}

function thetMovies2(data){
	carousel2.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
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
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
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

getMovies4(KIDS);

function getMovies4(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies4(data.results);
	})
}

function thetMovies4(data){
	carousel4.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
				<p class="overview " id="overview"> "${overview}"</p>
				<p class="title-cast font-weight-bold">Cast</p>
				<p class="cast" id="cast">....</p>
				<p class="title-release">Release Date</p>
				<p class="release date" id="release date">"${release_date}"</p>
			</div>
		`

	carousel4.appendChild(movieEl);
	});
}

getMovies5(RATED);

function getMovies5(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies5(data.results);
	})
}

function thetMovies5(data){
	carousel5.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
				<p class="overview " id="overview"> "${overview}"</p>
				<p class="title-cast font-weight-bold">Cast</p>
				<p class="cast" id="cast">....</p>
				<p class="title-release">Release Date</p>
				<p class="release date" id="release date">"${release_date}"</p>
			</div>
		`

	carousel5.appendChild(movieEl);
	});
}

getMovies6(ACTION);

function getMovies6(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies6(data.results);
	})
}

function thetMovies6(data){
	carousel6.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
				<p class="overview " id="overview"> "${overview}"</p>
				<p class="title-cast font-weight-bold">Cast</p>
				<p class="cast" id="cast">....</p>
				<p class="title-release">Release Date</p>
				<p class="release date" id="release date">"${release_date}"</p>
			</div>
		`

	carousel6.appendChild(movieEl);
	});
}

getMovies7(FANTASY);

function getMovies7(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies7(data.results);
	})
}

function thetMovies7(data){
	carousel7.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
				<p class="overview " id="overview"> "${overview}"</p>
				<p class="title-cast font-weight-bold">Cast</p>
				<p class="cast" id="cast">....</p>
				<p class="title-release">Release Date</p>
				<p class="release date" id="release date">"${release_date}"</p>
			</div>
		`

	carousel7.appendChild(movieEl);
	});
}

getMovies8(COMEDIA);

function getMovies8(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies8(data.results);
	})
}

function thetMovies8(data){
	carousel8.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
				<p class="overview " id="overview"> "${overview}"</p>
				<p class="title-cast font-weight-bold">Cast</p>
				<p class="cast" id="cast">....</p>
				<p class="title-release">Release Date</p>
				<p class="release date" id="release date">"${release_date}"</p>
			</div>
		`

	carousel8.appendChild(movieEl);
	});
}

getMovies9(CINE);

function getMovies9(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies9(data.results);
	})
}

function thetMovies9(data){
	carousel9.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
				<p class="overview " id="overview"> "${overview}"</p>
				<p class="title-cast font-weight-bold">Cast</p>
				<p class="cast" id="cast">....</p>
				<p class="title-release">Release Date</p>
				<p class="release date" id="release date">"${release_date}"</p>
			</div>
		`

	carousel9.appendChild(movieEl);
	});
}

getMovies10(MARA);

function getMovies10(url){
	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		thetMovies10(data.results);
	})
}

function thetMovies10(data){
	carousel10.innerHTML = '';

	data.forEach(movie => {
		const {title, poster_path, vote_average, overview, release_date} = movie;
		const movieEl = document.createElement('div');		
		movieEl.classList.add('pelicula');
		movieEl.innerHTML = `			
			<a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
			<div class="descripcion bg-light text-secondary text-justify">
				<p class="title" id="title">${title}</p>
				<span class="${getColor(vote_average)}">${vote_average}</span>
				<p class="overview " id="overview"> "${overview}"</p>
				<p class="title-cast font-weight-bold">Cast</p>
				<p class="cast" id="cast">....</p>
				<p class="title-release">Release Date</p>
				<p class="release date" id="release date">"${release_date}"</p>
			</div>
		`

	carousel10.appendChild(movieEl);
	});
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
        getMovies(TRENDING);
    }
    
})