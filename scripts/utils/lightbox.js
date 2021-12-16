async function lightbox() {
    await displayGallery();
    const gallery = document.querySelectorAll('.gallery-img-link');
        for (let i = 0; i < gallery.length; i++) {
             let str =  gallery[i].href; //Récupération de la chaine de caractère lien           
            gallery[i].addEventListener('click', (e) => {
                e.preventDefault();
                let currentLink = i;
                let container = document.body;
                let newLightbox = document.createElement('div'); //création de ma lightbox
                newLightbox.classList.add('lightbox');
                container.appendChild(newLightbox);

                if(str.includes('.mp4')){  //Distinction image / video au chargement de la lightBox
                    previewVideo ();                   
                }else{ 
                    preview();
                }

                //Affichage video
                function previewVideo (){
                    let newImg = document.createElement("div"); 
                    newImg.classList.add('lightbox__container')
                    let video = document.createElement('video');
                    video.setAttribute('controls', '');
                    let source = document.createElement('source');
                    source.setAttribute('src', gallery[currentLink].href);
                    source.setAttribute('type', 'video/mp4');
                    newImg.appendChild(video);
                    video.appendChild(source);
                    newLightbox.appendChild(newImg);
                }
                //Affichage image
                function preview (){
                    let newImg = document.createElement("div"); 
                    newImg.classList.add('lightbox__container')
                    let imgFull = document.createElement('img');
                    imgFull.setAttribute('src', gallery[currentLink].href);
                    newImg.appendChild(imgFull);
                    newLightbox.appendChild(newImg);
                }

                //Injection des flèches
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
                });

                //Affichage image precedente
                const previousButton = document.querySelector('.lightbox__prev');
                previousButton.addEventListener('click', (e) =>{
                    document.querySelector('.lightbox__container').remove(); 
                    currentLink--; //Décrementation lien précédent
                    if(currentLink == 0){
                        
                        document.querySelector('.lightbox__prev').remove(); 
                        if(gallery[currentLink].href.includes('.mp4')){  //Distinction image / video au chargement de la lightBox
                          previewVideo ();                   
                      }else{ 
                          preview();
                      }
                    }else{
                      if(gallery[currentLink].href.includes('.mp4')){  //Distinction image / video au chargement de la lightBox
                          previewVideo ();                   
                      }else{ 
                          preview();
                      }
                     
                    }    
                });
                //Affichage image suivante
                const nextButton = document.querySelector('.lightbox__next');
                nextButton.addEventListener('click', (e) =>{
                    document.querySelector('.lightbox__container').remove(); 
                    currentLink++; //Incrementation lien suivant
                    if(currentLink>= gallery.length-1){
                      if(gallery[currentLink].href.includes('.mp4')){  //Distinction image / video au chargement de la lightBox
                        previewVideo ();                   
                    }else{ 
                        preview();
                    }
                        document.querySelector('.lightbox__next').remove(); 
                    }else{
                      if(gallery[currentLink].href.includes('.mp4')){  //Distinction image / video au chargement de la lightBox
                        previewVideo ();                   
                      }else{ 
                          preview();
                      }
                    }
                });               
            })           
        }
}
lightbox();



