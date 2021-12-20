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
    const contact = document.createElement('article');
    contact.setAttribute('role', 'article');
    contact.classList.add('portrait-info');
    const count = document.createElement('div');
    count.classList.add('bloc-count');
    const img = document.createElement('img');
    const spanImg = document.createElement('span');
    img.setAttribute('src', picture);
    img.setAttribute('alt', `Portrait de ${name}, ${city}-${country}`);
    img.setAttribute('aria-label', `Portrait de ${name}, ${city}`);
    img.setAttribute('role', 'img');
    const h1 = document.createElement('h1');
    const location = document.createElement('h2');
    location.classList.add('location');
    const tarif = document.createElement('p');
    const info = document.createElement('p');
    const blocInfo = document.createElement('div');
    blocInfo.classList.add('portrait-info');
    h1.textContent = name;
    location.textContent = `${city} , ${country}`;
    info.textContent = tagline;
    tarif.textContent = `${price}€/jour`;
    spanImg.appendChild(img);
    photographHeader.appendChild(spanImg);
    contact.appendChild(h1);
    contact.appendChild(location);
    contact.appendChild(info);
    count.appendChild(tarif);
    main.appendChild(count);
    return (contact);
  }
  return { name, portrait, id, city, country, tagline, price, getFicheDOM };
}

// eslint-disable-next-line no-unused-vars
function galleryFactory(data) {
  const galleryDisplay = document.createElement('ul');
  galleryDisplay.classList.add('gal');
  function setPictures() {
  // construction et injection de la galerie
    data.forEach((element) => {
      const linked = element.image;
      const linkedVideo = element.video;
      const { title } = element;
      const { photographerId } = element;
      const { likes } = element;
      // eslint-disable-next-line no-prototype-builtins
      if (element.hasOwnProperty('video')) {
        galleryDisplay.innerHTML += `
                <li class="gallery-item">
                    <a href="assets/photographers/${photographerId}/${linkedVideo}" class="gallery-img-link">
                    <img src="assets/photographers/${photographerId}/thumb/${linked}" alt="Photograph ${title}"  title="${title}" aria-label="${title}" role="video">
                    </a>
                   <div class="gal-info">
                    <h3>${title}</h3>
                    <p>${likes}</p>
                    </div>
                </li>
            `;
      } else {
        galleryDisplay.innerHTML += `
                <li class="gallery-item">
                    <a href="assets/photographers/${photographerId}/${linked}" class="gallery-img-link">
                    <img src="assets/photographers/${photographerId}/thumb/${linked}" alt="Photograph ${title}"  title="${title}" aria-label="${title}" role="img">
                    </a>
                    <div class="gal-info">
                    <h3>${title}</h3>
                    <p>${likes}</p>
                    </div>
                </li>
            `;
      }
    });
    return (galleryDisplay);
  }
  return { setPictures };
}
