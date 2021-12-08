function ficheFactory(data) {
   // const { name, portrait, id, city, country, tagline, price } = data;
    const named = data.name;
 
   // const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;
    

    function getFicheDOM() {
        const contact = document.createElement( 'article' );
    //     const img = document.createElement( 'img' );
    //     img.setAttribute("src", picture);
    //     img.setAttribute("alt", `Portrait de ${name}, ${city}`);
       const h2 = document.createElement( 'h2' );
    //     const location = document.createElement('div','.info');
    //     const tarif = document.createElement('p');
    //     const info = document.createElement('p');
     

     h2.textContent = named;
    //     location.textContent = city+country;
    //     info.textContent = tagline;

        contact.appendChild(h2)

        return (contact);
     }
    //return { named, portrait, id, city, country, tagline, price,  getFicheDOM }
    return  {named , getFicheDOM}
}
    
     

function galleryFactory(data){

    function setPictures(){
        const galleryDisplay = document.createElement('ul');
        // rajouter une classe
        galleryDisplay.classList.add('gal');
        data.forEach(element => {   
            let linked = element.image;
            let title = element.title;
            let photographerId = element.photographerId;
            let likes = element.likes;
            galleryDisplay.innerHTML +=`
                <li class="gallery-item">
                    <a href="assets/photographers/${photographerId}/${linked}" class="gallery-img-link">
                    <img src="assets/photographers/${photographerId}/${linked}" alt="${title}" width="150">
                    </a>
                    <h3>${title}</h3>
                    <p>${likes}</p>
                </li>
            `
        });
       

        return (galleryDisplay);
    }

    return {setPictures}
}

