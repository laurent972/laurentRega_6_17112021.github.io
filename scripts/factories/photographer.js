function photographerFactory(data) {
    
    const { name, portrait, city, country, price, tagline } = data;

    const picture = `assets/photographers/${portrait}`;
    const alt=`Portrait of ${name} from ${city} ${country}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const portrait = document.createElement( 'img' );
        portrait.setAttribute("src", picture)
        portrait.setAttribute("alt", alt)
        const h2 = document.createElement( 'h2' );
        const location = document.createElement( 'p' );
        const tarif = document.createElement('p');
        const intro = document.createElement('p');

        h2.textContent = name;
        location.textContent = city+country;
        tarif.textContent = price;
        intro.textContent = tagline;

        article.appendChild(portrait);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(intro);
        article.appendChild(tarif);

        return (article);
    }
    return { name, portrait, city, country, price, tagline , getUserCardDOM }
}