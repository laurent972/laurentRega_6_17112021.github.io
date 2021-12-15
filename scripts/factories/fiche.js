function ficheFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;

    //Construction du bloc affichage fiche 
    function getFicheDOM() {
        const main = document.querySelector('main');
        const photographHeader = document.querySelector('.photograph-header');
        const contact = document.createElement( 'article' );
        contact.classList.add('portrait-info');
        const count = document.createElement('div');
        count.classList.add('bloc-count');
        const img = document.createElement( 'img' );
        const spanImg = document.createElement('span');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait de ${name}, ${city}-${country}`);
        const h1 = document.createElement( 'h1' );
        const location = document.createElement('p');
        location.classList.add('location');
        const tarif = document.createElement('p');
        const info = document.createElement('p');
        const blocInfo = document.createElement('div');
        blocInfo.classList.add('portrait-info');

        h1.textContent = name;
        location.textContent = city +' , '+ country;
        info.textContent = tagline;
        tarif.textContent = price+'€/jour';

        
        spanImg.appendChild(img); 
        photographHeader.appendChild(spanImg);
        contact.appendChild(h1);
        contact.appendChild(location);
        contact.appendChild(info);
        count.appendChild(tarif);
        main.appendChild(count);
        return (contact);
     }
    
    return  {name ,portrait, id, city, country, tagline, price, getFicheDOM};
}
    
function galleryFactory(data){
    const galleryDisplay = document.createElement('ul');
    galleryDisplay.classList.add('gal');
  
    function setPictures(){
        //construction et injection de la galerie
        data.forEach(element => {   
            let linked = element.image;
            let linkedVideo = element.video;
            let title = element.title;
            let photographerId = element.photographerId;
            let likes = element.likes;
            if(element.hasOwnProperty('video')){ 
                galleryDisplay.innerHTML +=`
                <li class="gallery-item">
                    <a href="assets/photographers/${photographerId}/${linkedVideo}" class="gallery-img-link">
                    <img src="assets/photographers/${photographerId}/thumb/${linked}" alt="Photograph ${title}" width="150" title="${title}">
                    </a>
                   <div class="gal-info">
                    <h3>${title}</h3>
                    <p>${likes}</p>
                    </div>
                </li>
            `;
            }else {
                galleryDisplay.innerHTML +=`
                <li class="gallery-item">
                    <a href="assets/photographers/${photographerId}/${linked}" class="gallery-img-link">
                    <img src="assets/photographers/${photographerId}/thumb/${linked}" alt="Photograph ${title}" width="150" title="${title}">
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

    return {setPictures};
}

