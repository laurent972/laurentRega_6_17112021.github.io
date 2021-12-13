const query_url_id = window.location.search;
const urlSearchParams = new URLSearchParams(query_url_id);
const _id = urlSearchParams.get("id");



let photographers= [];
let medias=[];
//Appel des photographes
async function getPhotographers() {
            await fetch('data/photographers.json')
                     .then((response)=>response.json())
                     .then((data)=> photographers = data.photographers);
     return photographers;
 }

//appel des medias
async function getPictures(){
            await fetch('data/photographers.json')
                     .then((response)=>response.json())
                     .then((data)=> medias=data.media)
     return medias;
}

//Affichage de la fiche photographe
async function displayFiche(){
    const photographHeader = document.querySelector('.photograph-header');
    await getPhotographers();
    const fiche = photographers.find( photographer =>photographer.id == _id);
    const photographerDetail = ficheFactory(fiche);
    const getFicheDOM = photographerDetail.getFicheDOM();
    photographHeader.appendChild(getFicheDOM);
}
displayFiche();



//Affichage de la galerie d'images
async function displayGallery(){
    await getPictures();
    let gallery=[];
    let logId;
    //Filtre d'affichage de la galerie d'images
    if(query_url_id.includes('&sortByLikes')){
        gallery = medias.filter(media=>media.photographerId == _id);
        gallery = gallery.sort(byLikes);//Tri par likes
    }else if(query_url_id.includes('&sortByTitles')){
        gallery = medias.filter(media=>media.photographerId == _id);
        gallery = gallery.sort(byTitles);//Tri par likes
    }else{
        gallery = medias.filter(media=>media.photographerId == _id);
    }
 
    const photographerGallery = document.querySelector('.photographer-gallery');
        const uniqGallery = galleryFactory(gallery);
        const setPictures = uniqGallery.setPictures();
        photographerGallery.appendChild(setPictures);
        logId=gallery[0].photographerId;
 
    return (logId); //Récupération du currentID pour affichage des liens relatif au photographe
}

//Fonction de tri affichage
async function tri(){
    const filterLike = document.querySelector('.like');
    const filterTitles = document.querySelector('.title');
    const filterBase = document.querySelector('.base');
    const linkSortLikes  = `photographer.html?id=${_id}&sortByLikes`;
    const linkSortTitles  = `photographer.html?id=${_id}&sortByTitles`;
    const linkSort  = `photographer.html?id=${_id}`;

    filterLike.addEventListener('click', (e)=>{ 
        location.href = linkSortLikes;       
    });

    filterTitles.addEventListener('click', (e)=>{ 
        location.href = linkSortTitles;       
    });

    filterBase.addEventListener('click', (e)=>{ 
        location.href = linkSort;       
    });
}
tri();


