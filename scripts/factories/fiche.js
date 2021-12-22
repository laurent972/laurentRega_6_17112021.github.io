/* eslint-disable object-curly-newline */
// eslint-disable-next-line no-unused-vars
function ficheFactory(data) {
  const { name, portrait, id, city, country, tagline, price } = data;
  const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;

  // Construction du bloc affichage fiche
  function getFicheDOM() {
    const main = document.querySelector('main');
    main.setAttribute('role', 'main');
    const photographHeader = document.querySelector('.photograph-header');
    const tarif = document.querySelector('.price');
    const contact = document.createElement('article');
    contact.setAttribute('role', 'article');
    contact.classList.add('portrait-info');
    const img = document.createElement('img');
    const spanImg = document.createElement('span');
    img.setAttribute('src', picture);
    img.setAttribute('alt', `Portrait de ${name}, ${city}-${country}`);
    img.setAttribute('aria-label', `Portrait de ${name}, ${city}`);
    img.setAttribute('role', 'img');
    const h1 = document.createElement('h1');
    const location = document.createElement('h2');
    location.classList.add('location');

    const info = document.createElement('p');
    const blocInfo = document.createElement('div');
    blocInfo.classList.add('portrait-info');
    h1.textContent = name;
    location.textContent = `${city} , ${country}`;
    info.textContent = tagline;
    spanImg.appendChild(img);
    photographHeader.appendChild(spanImg);
    contact.appendChild(h1);
    contact.appendChild(location);
    contact.appendChild(info);
    tarif.textContent = `${price}€/jour`;
    return (contact);
  }
  return { name, portrait, id, city, country, tagline, price, getFicheDOM };
}
