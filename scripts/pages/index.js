/* eslint-disable no-return-assign */
let photographers;

async function getPhotographers() {
  await fetch('data/photographers.json')
    .then((response) => response.json())
    .then((data) => photographers = data.photographers);
  return photographers;
}

// eslint-disable-next-line no-shadow
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');
  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  await getPhotographers();
  displayData(photographers);
}
init();
