/* eslint-disable no-return-assign */
const queryUrlId = window.location.search;
const urlSearchParams = new URLSearchParams(queryUrlId);
const id = urlSearchParams.get('id');

let photographers = [];
let medias = [];
let count = 0;
// Appel des photographes
async function getPhotographers() {
  await fetch('data/photographers.json')
    .then((response) => response.json())
    .then((data) => photographers = data.photographers);
  return photographers;
}

// appel des medias
async function getPictures() {
  await fetch('data/photographers.json')
    .then((response) => response.json())
    .then((data) => medias = data.media);
  return medias;
}

// Affichage de la fiche photographe
async function displayFiche() {
  const photographHeader = document.querySelector('.photograph-header');
  await getPhotographers();
  // eslint-disable-next-line eqeqeq
  const fiche = photographers.find((photographer) => photographer.id == id);
  // eslint-disable-next-line no-undef
  const photographerDetail = ficheFactory(fiche);
  const getFicheDOM = photographerDetail.getFicheDOM();
  photographHeader.appendChild(getFicheDOM);
}
displayFiche();

// Affichage de la galerie d'images
// eslint-disable-next-line no-unused-vars
async function displayGallery() {
  await getPictures();
  let gallery = [];
  let logId;
  // Filtre d'affichage de la galerie d'images
  if (queryUrlId.includes('&sortByLikes')) {
    // eslint-disable-next-line eqeqeq
    gallery = medias.filter((media) => media.photographerId == id);
    // eslint-disable-next-line no-undef
    gallery = gallery.sort(byLikes);// Tri par likes
  } else if (queryUrlId.includes('&sortByTitles')) {
    // eslint-disable-next-line eqeqeq
    gallery = medias.filter((media) => media.photographerId == id);
    // eslint-disable-next-line no-undef
    gallery = gallery.sort(byTitles);// Tri par likes
  } else {
    // eslint-disable-next-line eqeqeq
    gallery = medias.filter((media) => media.photographerId == id);
  }
  // eslint-disable-next-line no-shadow
  gallery.map((gallery) => count += gallery.likes);
  const photographerGallery = document.querySelector('.photographer-gallery');
  // eslint-disable-next-line no-undef
  const uniqGallery = galleryFactory(gallery);
  const setPictures = uniqGallery.setPictures();
  photographerGallery.appendChild(setPictures);
  // eslint-disable-next-line prefer-const
  logId = gallery[0].photographerId;

  const blocCount = document.querySelector('.bloc-count');
  blocCount.innerHTML += `<p class="likeCount">${count}</p>`;
  return (logId, count);
  // Récupération du currentID pour affichage des liens relatif au photographe
}

// eslint-disable-next-line no-undef
tri();
