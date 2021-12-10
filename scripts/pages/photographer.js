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
    const photographerGallery = document.querySelector('.photographer-gallery');
    const filterLikes = document.querySelector('#tri-select');
    let gallery=[];
    let logId;
    gallery = medias.filter(media=>media.photographerId == _id); //Récupération des photos
    //Filtre d'affichage de la galerie d'images 
    filterLikes.addEventListener('change', (e)=>{
                if(e.target.value === 'likes'){
                   gallery = gallery.sort(byLikes); //Tri par likes
                   logGallery();
                   console.log(gallery);
                }else if(e.target.value === 'title'){
                    gallery = gallery.sort(byTitles); //Tri par titre
                    logGallery();
                    console.log(gallery);
                }else{
                    logGallery();
                }
            });

    function logGallery(){
        const uniqGallery = galleryFactory(gallery);
        const setPictures = uniqGallery.setPictures();
        photographerGallery.appendChild(setPictures);
        logId=gallery[0].photographerId;
    }
    logGallery(); //Chargement de la galerie au chargement de la page
    return logId; //Récupération du currentID pour affichage des liens relatif au photographe
}





