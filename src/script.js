import '../src/style.css';
import { filmsMock } from './filmsMock';

const ALL_FILMS = 'all_films';
const FAVOURIT_FILMS = 'favourit_films';

// запись картотеки фильмов в память и возврат оттуда

function toStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function fromStorage(key) {
   return JSON.parse(localStorage.getItem(key));
}

toStorage(ALL_FILMS, filmsMock);
toStorage(FAVOURIT_FILMS, []);

// создание контейнера для фильмов

function renderFilmsList(filmsObj,listType) {
  const filmConteiner = document.querySelector('.films-container');
  filmConteiner.insertAdjacentHTML('afterend', `
  <div id="${listType}" class="film-cards-container"></div>
  `)
  const filmCardsContainer = document.querySelector('.film-cards-container');
  // рисуем фильмы
  if (filmsObj.length) {
    filmsObj.forEach((film) => renderFilmCard(film, filmCardsContainer));
  } else {
    filmCardsContainer.innerHTML = '<div>Список пуст</div>';
  }
}

function renderFilmCard(film, container) {
  const { imgUrl, movieName, releaseYear, isFavourite } = film;
console.log(isFavourite);

  const btnImg = isFavourite ? 'favourite.png' : 'notFavourite.png';
  console.log(btnImg);
  container.insertAdjacentHTML('beforeend', `
  <div class="film-card">
      <img class="film-card__poster" src="${imgUrl}">
      <div class="film-card__title">${movieName}</div>
      <div class="film-card__year">${releaseYear}</div>
      <button class="film-card__button">
        <img class="film-card__button-img" src="./assets/img/${btnImg}">
      </button>
    </div>`)
}

renderFilmsList(filmsMock, ALL_FILMS);
