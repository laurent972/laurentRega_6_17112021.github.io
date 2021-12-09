async function lightbox() {
    await displayGallery();
    const gallery = document.querySelectorAll('.gallery-img-link');
    window.addEventListener('load', () => {
        for (let i = 0; i < gallery.length; i++) {
             let str =  gallery[i].href; //Récupération de la chaine de caractère lien           
            gallery[i].addEventListener('click', (e) => {
                e.preventDefault();
                let currentLink = i;
                let container = document.body;
                let newLightbox = document.createElement('div'); //création de ma lightbox
                newLightbox.classList.add('lightbox');
                container.appendChild(newLightbox);

                if(str.includes('video')){  //Distinction image / video au chargement de la lightBox
                    previewVideo ();                   
                }else{ 
                    preview();
                }

                function previewVideo (){
                    let newImg = document.createElement("div"); 
                    newImg.classList.add('lightbox__container')
                    let video = document.createElement('video');
                    video.setAttribute('controls', '');
                    let source = document.createElement('source');
                    source.setAttribute('src', '/assets/photographers/'+logId+'/video.mp4');
                    source.setAttribute('type', 'video/mp4');
                    newImg.appendChild(video);
                    video.appendChild(source);
                    newLightbox.appendChild(newImg);
                }
                
                function preview (){
                    let newImg = document.createElement("div"); 
                    newImg.classList.add('lightbox__container')
                    let imgFull = document.createElement('img');
                    imgFull.setAttribute('src', gallery[currentLink].href);
                    newImg.appendChild(imgFull);
                    newLightbox.appendChild(newImg);
                }


                const lightbox = document.querySelector('.lightbox');
                lightbox.innerHTML +=`
                        <button class="lightbox__close">Fermer</button>
                        <button class="lightbox__next">Suivant</button>
                        <button class="lightbox__prev">Précédent</button>
                `; 

                //Fermeture de la lightbox
                const close = document.querySelector('.lightbox__close');
                close.addEventListener('click', (e) => {
                    document.querySelector('.lightbox').remove();  
                })

                //Affichage image precedente
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
                //Affichage image suivante
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
lightbox();



