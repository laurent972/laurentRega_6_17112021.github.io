let photographers= [];
async function getPhotographers() {

    await fetch('data/photographers.json')
                //await fetch('../data/photographers.json')
                     .then((response)=>response.json())
                     .then((data)=> photographers = data.photographers);
     //console.log(photographers);
     return photographers;
 }

let medias=[];
async function getPictures(){
    await fetch('data/photographers.json')
    //await fetch('../data/photographers.json')
                     .then((response)=>response.json())
                     //.then((data)=> medias = data.medias);
                     .then((data)=> medias=data.media)
   // console.log(medias);
     return medias;
}



//
const query_url_id = window.location.search;


const urlSearchParams = new URLSearchParams(query_url_id);
const _id = urlSearchParams.get("id");


async function displayFiche(){
    const photographHeader = document.querySelector('.photograph-header');
    await getPhotographers()
    const fiche = photographers.find( photographer =>photographer.id == _id);
    const photographerDetail = ficheFactory(fiche);
    const getFicheDOM = photographerDetail.getFicheDOM();
    photographHeader.appendChild(getFicheDOM)
}
displayFiche();

async function displayGallery(){
    const photographerGallery = document.querySelector('.photographer-gallery');
    await getPictures();
    let gallery=[];
    gallery = medias.filter(media=>media.photographerId == _id);
    const uniqGallery = galleryFactory(gallery);
    const setPictures = uniqGallery.setPictures();
    photographerGallery.appendChild(setPictures)
}


async function lightbox() {
    await displayGallery();
    const gallery = document.querySelectorAll('.gallery-img-link');
    

    console.log(gallery);

    window.addEventListener('load', () => {
        for (let i = 0; i < gallery.length; i++) {

            gallery[i].addEventListener('click', (e) => {
                e.preventDefault();
                let currentLink = i;

                let index= i;
                let previousLink = gallery[index - 1].href;
                let nextLink = gallery[index + 1].href;

                let container = document.body;
                let newLightbox = document.createElement('div'); //création de ma lightbox
                newLightbox.classList.add('lightbox');
                container.appendChild(newLightbox);

                function preview (){
                    let newImg = document.createElement("div"); 
                    newImg.classList.add('lightbox__container')
                    let imgFull = document.createElement('img');
                    imgFull.setAttribute('src', gallery[currentLink].href);
                    newImg.appendChild(imgFull);
                    newLightbox.appendChild(newImg);
                    console.log(currentLink);

                }
                preview();

                
                const lightbox = document.querySelector('.lightbox');
                lightbox.innerHTML +=`
                        <button class="lightbox__close">Fermer</button>
                        <button class="lightbox__next">Suivant</button>
                        <button class="lightbox__prev">Précédent</button>
                `; 

                const close = document.querySelector('.lightbox__close');
                close.addEventListener('click', (e) => {
                    document.querySelector('.lightbox').remove();  
                    console.log('toto1');  
                })

                const previousButton = document.querySelector('.lightbox__prev');
                previousButton.addEventListener('click', (e) =>{
                    document.querySelector('.lightbox__container').remove(); 
                    currentLink--;
                    if(currentLink == 0){
                        preview();
                        document.querySelector('.lightbox__prev').remove(); 
                    }else{
                        console.log(currentLink);
                        preview();
                    }
                    
                });

                const nextButton = document.querySelector('.lightbox__next');
                nextButton.addEventListener('click', (e) =>{
                    document.querySelector('.lightbox__container').remove(); 
                    currentLink++;
                    if(currentLink>= gallery.length-1){
                        preview();
                        document.querySelector('.lightbox__next').remove(); 
                    }else{
                        preview();
                    }
                    console.log(currentLink);
                    
                });
                
            })
            
        }
    })
}
lightbox()

