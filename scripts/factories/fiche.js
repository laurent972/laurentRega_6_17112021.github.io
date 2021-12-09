function ficheFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    

 
    const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;
    

    function getFicheDOM() {
        const contact = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait de ${name}, ${city}-${country}`);
        const h2 = document.createElement( 'h2' );
        const location = document.createElement('div','.info');
        const tarif = document.createElement('p');
        const info = document.createElement('p');
        const blocInfo = document.createElement('div');
        blocInfo.classList.add('portrait-info');

     h2.textContent = name;
     location.textContent = city +' - '+ country;
     info.textContent = tagline;

        
        contact.appendChild(blocInfo);
        blocInfo.appendChild(h2);
        blocInfo.appendChild(location);
        blocInfo.appendChild(info);
        contact.appendChild(img);

        return (contact);
     }
    //return { named, portrait, id, city, country, tagline, price,  getFicheDOM }
    return  {name , getFicheDOM}
}
    
     

function galleryFactory(data){
    function setPictures(){
        const galleryDisplay = document.createElement('ul');
        // rajouter une classe
        galleryDisplay.classList.add('gal');
        data.forEach(element => {   
            let linked = element.image;
            if(linked.includes('.mp4')){
                linked = linked.replace('.jpg','.mp4');
                console.log(linked);
            }

            let title = element.title;
            let photographerId = element.photographerId;
            let likes = element.likes;
            galleryDisplay.innerHTML +=`
                <li class="gallery-item">
                    <a href="assets/photographers/${photographerId}/${linked}" class="gallery-img-link">
                    <img src="assets/photographers/${photographerId}/thumb/${linked}" alt="Photograph: ${title}" width="150" title="${title}">
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

