function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;
    const link = `photographer.html?id=${data.id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const spanImg = document.createElement('span');
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait de ${name}, ${city}`);
        const h2 = document.createElement( 'h2' );
        const location = document.createElement('div');
        const tarif = document.createElement('p');
        tarif.classList.add('tarif');
        const info = document.createElement('p');
        const href= document.createElement('a');
        href.setAttribute('href', link)

        h2.textContent = name;
        location.textContent = city+', '+country;
        tarif.textContent = price+'€/jour';
        info.textContent = tagline;

        article.appendChild(href);
        article.appendChild(spanImg);
        spanImg.appendChild(img); 
        href.appendChild(spanImg);
        href.appendChild(h2);
        href.appendChild(location);
        location.appendChild(info);
        location.appendChild(tarif);
             
     
        return (article);
    }
    return { name, portrait, id, city, country, tagline, price,  getUserCardDOM }
}

