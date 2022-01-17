/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const queryUrlId = window.location.search;
const urlSearchParams = new URLSearchParams(queryUrlId);
const id = urlSearchParams.get('id');
const fullLikes = document.querySelector('.likeCount');
const filterBox = document.querySelector('.filter-box');
const filterboxDiv = document.querySelector('.filter-box .focus');


let totalLikes; // total des likes en bas de page
let photographers = []; // liste des photographes
let medias = []; // liste des images

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

    filterboxDiv.innerHTML=`
   
    <button onClick="clickLikes()">Popularité <img src="assets/images/4781842_arrow_chevron_direction_down_move_icon.png" width="18"></button>
    <button onClick="clickDate()">Date</button> 
    <button onClick="clickTitre()">Titre</button>
   
    `
    // eslint-disable-next-line eqeqeq
    gallery = medias.filter((media) => media.photographerId == id);
    // eslint-disable-next-line no-undef
    gallery = gallery.sort(byLikes);// Tri par likes
 
  } else if (queryUrlId.includes('&sortByTitles')) {
    filterboxDiv.innerHTML=`
   
    <button onClick="clickTitre()">Titre <img src="assets/images/4781842_arrow_chevron_direction_down_move_icon.png" width="18"></button>
    <button onClick="clickLikes()">Popularité</button>
    <button onClick="clickDate()">Date</button> 
   
    `
    // eslint-disable-next-line eqeqeq
    gallery = medias.filter((media) => media.photographerId == id);
    // eslint-disable-next-line no-undef
    gallery = gallery.sort(byTitles);// Tri par likes

  }else if (queryUrlId.includes('&sortByDate')) {
  
      // eslint-disable-next-line eqeqeq
      gallery = medias.filter((media) => media.photographerId == id);
      // eslint-disable-next-line no-undef
      gallery = gallery.sort(byDate);// Tri par likes

  }else {
    // eslint-disable-next-line eqeqeq
    gallery = medias.filter((media) => media.photographerId == id);
  
  }
  // eslint-disable-next-line no-shadow
  const photographerGallery = document.querySelector('.photographer-gallery');
  // eslint-disable-next-line no-undef
  const uniqGallery = galleryFactory(gallery);
  const setPictures = uniqGallery.setPictures();
  photographerGallery.appendChild(setPictures);
  // eslint-disable-next-line prefer-const
  logId = gallery[0].photographerId;
  const photoLikes = document.querySelectorAll('.likes');
  photoLikes.forEach((element) => {
    let likes = Math.floor(element.innerText);
    element.addEventListener('click', () => {
      const upLikes = likes += 1;
      element.innerHTML = upLikes;
      element.setAttribute('data-likes', upLikes);
      // eslint-disable-next-line no-use-before-define
      countTotalLikes();
    });
  });

  function countTotalLikes() {
    const everyLikes = Array.from(document.querySelectorAll('button[data-likes]'));
    totalLikes = everyLikes.reduce((total, element) => total + Number(element.dataset.likes), 0);
    fullLikes.textContent = totalLikes;
  }
  countTotalLikes();
  return (logId, gallery);
}


filterboxDiv.addEventListener('focusin',(e)=>{
  console.log('toto');
  const buttons=document.querySelectorAll('.filter-box div button');
    buttons.forEach(element => {
      console.log(element);
        element.style.position = 'relative';
        element.style.display = 'block';
        element.style.top = 'auto';
    });
});