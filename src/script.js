export const filmsMock = [
  {
    id: 1,
    imgUrl: 'assets/img/Marvel1.jpg',
    movieName: 'Marvel One-Shot: Item 47',
    releaseYear: 2012,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 2,
    imgUrl: './assets/img/Marvel2.jpg',
    movieName: 'Captain Marvel',
    releaseYear: 2019,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 3,
    imgUrl: './assets/img/Marvel3.jpg',
    movieName: 'Marvel Studios: Legends',
    releaseYear: 2021,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 4,
    imgUrl: './assets/img/Marvel4.jpg',
    movieName: 'Marvel One-Shot: The Consultant',
    releaseYear: 2011,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 5,
    imgUrl: './assets/img/Marvel5.jpg',
    movieName: 'Marvel Studios: Assembled',
    releaseYear: 2021,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 6,
    imgUrl: './assets/img/Marvel6.jpg',
    movieName: 'Lego Marvel Super Heroes',
    releaseYear: 2013,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 7,
    imgUrl: './assets/img/Marvel7.jpg',
    movieName: "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
    releaseYear: 2011,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 8,
    imgUrl: './assets/img/Marvel8.jpg',
    movieName: 'Marvel One-Shot: Agent Carter',
    releaseYear: 2013,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 9,
    imgUrl: './assets/img/Marvel9.jpg',
    movieName: 'Marvel One-Shot: All Hail the King',
    releaseYear: 2014,
    isFavourite: false,
    description: 'The best movie ever!',
  },
  {
    id: 10,
    imgUrl: './assets/img/Marvel10.jpg',
    movieName: 'Marvel Studios: Assembling a Universe',
    releaseYear: 2014,
    isFavourite: false,
    description: 'The best movie ever!',
  },
];


const ALL_FILMS = 'all_films';
const FAVOURITE_FILMS = 'favourite_films';
// Инициализация localStorage;

if (!fromStorage(ALL_FILMS) && !fromStorage(FAVOURITE_FILMS)) {
  toStorage(ALL_FILMS, filmsMock);
  toStorage(FAVOURITE_FILMS, []);
}

// Рисуем список фильмов
const storagedFilms = fromStorage(ALL_FILMS);
renderFilmsList(storagedFilms, ALL_FILMS);

// Логика переключения разделов Все фильмы/Избранные фильмы
const favouriteFilmsBtn = document.querySelector('.film-cards-container__favourite-films');

favouriteFilmsBtn.addEventListener('click', () => handleFilmsListSwitch(favouriteFilmsBtn));

// ============================

function toStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function fromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Фунция рендера списка фильмов
function renderFilmsList(filmsList, listType) {
  const favouriteFilmsBtnHTML = document.querySelector('.film-cards-container__favourite-films');

  favouriteFilmsBtnHTML.insertAdjacentHTML(
    'afterend',
    `<div id="${listType}" class="film-cards-container"></div>`
  );

  const filmsContainer = document.querySelector('.film-cards-container');

  // Рисуем список фильмов
  if (filmsList.length) {
    filmsList.forEach((film) => renderFilmCard(film, filmsContainer));
  } else {
    filmsContainer.innerHTML = '<div>Список пуст</div>';
  }

  // Слушатели кликов по кнопке добавления в избранное
  const likeBtns = document.querySelectorAll('.film-card__button');
  likeBtns.forEach((btn, i) =>
    btn.addEventListener('click', () => handleLikeBtnClick(filmsList, listType, i))
  );

  // Слушатели открытия и закрытия модального окна
  const filmsTitles = document.querySelectorAll('.film-card__title');
  filmsTitles.forEach((title, i) =>
    title.addEventListener('click', () => {
      const clickedFilm = filmsList[i];
      renderFilmModal(clickedFilm, filmsContainer);

      const closeModalBtn = document.querySelector('.close-modal');
      closeModalBtn.addEventListener(
        'click',
        () => {
          const modal = document.querySelector('.modal');
          modal.remove();
        },
        { once: true }
      );
    })
  );
}

// Функция отрисовки карточки фильма
function renderFilmCard(film, targetContainer) {
  const { imgUrl, movieName, releaseYear, isFavourite } = film;

  const btnImg = isFavourite ? 'favourite.png' : 'notFavourite.png';
  targetContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="film-card">
      <img class="film-card__poster" src="${imgUrl}">
      <div class="film-card__title">${movieName}</div>
      <div class="film-card__year">${releaseYear}</div>
      <button class="film-card__button">
        <img class="film-card__button-img" src="./assets/img/${btnImg}">
      </button>
    </div>`
  );
}

function renderFilmModal(clickedFilm, targetContainer) {
  const { imgUrl, movieName, releaseYear, isFavourite, description } = clickedFilm;
  const btnImg = isFavourite ? 'favourite.png' : 'notFavourite.png';

  targetContainer.insertAdjacentHTML(
    'afterend',
    `
  <div class="modal">
    <div class="modal-content">
      <div class="close-modal">
        <img class="close-modal-icon" src="./assets/img/cross.png" >
      </div>
      
      <img class="film-card__poster" src="${imgUrl}">
      <div class="film-card__title">${movieName}</div>
      <div class="film-card__year">${releaseYear}</div>
      <div class="film-card__description">${description}</div>
      <button class="film-card__button">
        <img class="film-card__button-img" src="./assets/img/${btnImg}">
      </button>
    </div>
  </div>
  `
  );
}

// Функция-обработчик для кнопки добавления в избранное
function handleLikeBtnClick(filmsList, listType, i) {
  filmsList[i].isFavourite = !filmsList[i].isFavourite;

  const sortedFilmsList = sortByIsFavourite(filmsList);
  const sortedFavouriteFilmsList = sortFavouriteFilms(sortedFilmsList);

  const filmsListContainer = document.getElementById(listType);

  switch (listType) {
    case ALL_FILMS:
      toStorage(ALL_FILMS, sortedFilmsList);
      toStorage(FAVOURITE_FILMS, sortedFavouriteFilmsList);
      filmsListContainer.remove();
      renderFilmsList(sortedFilmsList, listType);
      return;
    case FAVOURITE_FILMS:
      const newAllFilmsList = fromStorage(ALL_FILMS);
      newAllFilmsList[i].isFavourite = !newAllFilmsList[i].isFavourite;

      toStorage(ALL_FILMS, sortByIsFavourite(newAllFilmsList));
      toStorage(FAVOURITE_FILMS, sortedFavouriteFilmsList);
      filmsListContainer.remove();
      renderFilmsList(sortedFavouriteFilmsList, listType);
      return;
    default:
      return;
  }
}

// Функции сортировки
function sortByIsFavourite(films) {
  return films.sort((a, b) => a.id - b.id).sort((a) => (a.isFavourite ? -1 : 1));
}

function sortFavouriteFilms(films) {
  return films.filter((film) => film.isFavourite).sort((a, b) => b.id - a.id);
}

// Свичер списков

function handleFilmsListSwitch(switcherBtn) {
  const filmsContainer = document.querySelector('.film-cards-container');

  const filmsCardContainerTitle = document.querySelector('.film-cards-container__title');

  switch (filmsContainer.id) {
    case ALL_FILMS:
      filmsContainer.remove();
      filmsCardContainerTitle.innerHTML = 'Favourite Films';
      switcherBtn.innerHTML = 'See All Films';
      renderFilmsList(fromStorage(FAVOURITE_FILMS), FAVOURITE_FILMS);
      return;
    case FAVOURITE_FILMS:
      filmsContainer.remove();
      filmsCardContainerTitle.innerHTML = 'All Films';
      switcherBtn.innerHTML = 'See Favourite Films';
      renderFilmsList(fromStorage(ALL_FILMS), ALL_FILMS);
      return;
    default:
      return;
  }
}
