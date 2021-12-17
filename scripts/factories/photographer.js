function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;
    const link = `photographer.html?id=${data.id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute('role','article');
        const spanImg = document.createElement('span');
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo de ${name} photographe ${country}`);
        img.setAttribute("title", `Portrait de ${name}, ${city}`);
        img.setAttribute("aria-label", `Portrait de ${name}, ${city}`);
        img.setAttribute("role", `img`);
        const h2 = document.createElement( 'h2' );
        const location = document.createElement('div');
        const h3 = document.createElement('h3');
        const tarif = document.createElement('p');
        tarif.classList.add('tarif');
        const info = document.createElement('p');
        const href= document.createElement('a');
        href.setAttribute('href', link)

        h2.textContent = name;
        h3.textContent = city+', '+country;
        tarif.textContent = price+'€/jour';
        info.textContent = tagline;

        article.appendChild(href);
        article.appendChild(spanImg);
        spanImg.appendChild(img); 
        href.appendChild(spanImg);
        href.appendChild(h2);
        href.appendChild(location);
        location.appendChild(h3)
        location.appendChild(info);
        location.appendChild(tarif);
       
             
     
        return (article);
    }
    return { name, portrait, id, city, country, tagline, price,  getUserCardDOM }
}

