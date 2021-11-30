let photographers= [];
async function getPhotographers() {

    await fetch('../data/photographers.json')
                     .then((response)=>response.json())
                     .then((data)=> photographers = data.photographers);
     //console.log(photographers);
     return photographers;
 }

let medias=[];
async function getPictures(){
    await fetch('../data/photographers.json')
                     .then((response)=>response.json())
                     //.then((data)=> medias = data.medias);
                     .then((data)=> medias=data.media)
   // console.log(medias);
     return medias;
}
getPictures()


//
const query_url_id = window.location.search;
console.log(query_url_id);

const urlSearchParams = new URLSearchParams(query_url_id);
const _id = urlSearchParams.get("id");
console.log(_id);

async function displayFiche(){
    await getPhotographers()
    const fiche = photographers.find( photographer =>photographer.id == _id);
   // return fiche;
   console.log(fiche);
}
displayFiche()

async function displayGallery(){
    await getPictures();
    let gallery=[];
    gallery = medias.filter(media=>media.photographerId == _id);
    //return gallery;
    console.log(gallery);
}
displayGallery()