function photographerFactory(data) {
    
    const { name, portrait, city, country, price, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const location = document.createElement( 'p' );
        const tarif = document.createElement('p');
        const intro = document.createElement('p')

        h2.textContent = name;
        location.textContent = city+country;
        tarif.textContent = price;
        intro.textContent = tagline;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(intro);
        article.appendChild(tarif);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}