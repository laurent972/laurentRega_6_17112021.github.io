async function lightbox() {
  // eslint-disable-next-line no-undef
  await displayGallery();
  
  const gallery = document.querySelectorAll('.gallery-img-link');
  const titles = document.querySelectorAll('.gallery-img-link img[title]')
 
  for (let i = 0; i < gallery.length; i += 1) {
    const str = gallery[i].href; // Récupération de la chaine de caractère lien
    gallery[i].addEventListener('click', (e) => {
    
      e.preventDefault();
      let currentLink = i;
      let currentTitle = i;
      const container = document.body;
      const newLightbox = document.createElement('div'); // création de ma lightbox
      newLightbox.classList.add('lightbox');
      container.appendChild(newLightbox);
      console.log(gallery.length);
      // Affichage video
      function previewVideo() {
        const newImg = document.createElement('div');
        newImg.classList.add('lightbox__container');
        const h3 = document.createElement('h3');
        const video = document.createElement('video');
        video.setAttribute('controls', '');
        const source = document.createElement('source');
        h3.textContent = titles[currentTitle].title;
        source.setAttribute('src', gallery[currentLink].href);
        source.setAttribute('type', 'video/mp4');
        newImg.appendChild(video);
        newImg.appendChild(h3);
        video.appendChild(source);
        newLightbox.appendChild(newImg);
      }
      // Affichage image
      function preview() {
        const newImg = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = titles[currentTitle].title;
        newImg.classList.add('lightbox__container');
        const imgFull = document.createElement('img');
        imgFull.setAttribute('src', gallery[currentLink].href);
        imgFull.setAttribute('role', 'img');
        imgFull.setAttribute('alt', 'photographie de ');
        newImg.appendChild(imgFull);
        newLightbox.appendChild(newImg);
        newImg.appendChild(h3);
      }
      if (str.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
        previewVideo();
      } else {
        preview();
      }
      // Injection des flèches
      // eslint-disable-next-line no-shadow
      const lightbox = document.querySelector('.lightbox');
      lightbox.innerHTML += `
                        <button class="lightbox__close">Fermer</button>
                        <button class="lightbox__next">Suivant</button>
                        <button class="lightbox__prev">Précédent</button>
                `;
      // Fermeture de la lightbox
      const close = document.querySelector('.lightbox__close');
      close.addEventListener('click', () => {
        document.querySelector('.lightbox').remove();
      });
      // Affichage image precedente
      const previousButton = document.querySelector('.lightbox__prev');
      previousButton.addEventListener('click', () => {
        document.querySelector('.lightbox__container').remove();
        currentLink -= 1;
        currentTitle -=1; // Décrementation lien précédent
        if (currentLink === 0) {
          if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
            previewVideo();
          } else {
            preview();
          }
        } else if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
          previewVideo();
        } else {
          preview();
        }
      });
      // Affichage image suivante
      const nextButton = document.querySelector('.lightbox__next');
      nextButton.addEventListener('click', () => {
        
        currentLink += 1;// Incrementation lien suivant
        currentTitle +=1;
        if (currentLink >= gallery.length - 1) {
          if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
            previewVideo();
          } else {
            preview();
          }
      
        } else if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
          previewVideo();
        } else {
          preview();
        }
      });
      // KeyboardEvents ==> Accessibility //
      // Close lightbox
      window.addEventListener('keydown', (event) => {
        if (event.defaultPrevented) {
          return;
        }

        switch (event.key) {
          case 'ArrowLeft':
         
            currentLink -= 1; // Décrementation lien précédent
            currentLink -= 1;
            if (currentLink === 0) {
             
              if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
                previewVideo();
              } else {
                preview();
              }
            } else if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
              previewVideo();
            } else {
              preview();
            }
            break;
          case 'ArrowRight':
           
            currentLink += 1;
            currentTitle +=1; // Incrementation lien suivant
            if (currentLink >= gallery.length - 1) {
              if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
                previewVideo();
              } else {
                preview();
              }
            
            } else if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
              previewVideo();
            } else {
              preview();
            }
            break;
          case 'Escape':
            document.querySelector('.lightbox').remove();
            break;
          default:
            return;
        }
        event.preventDefault();
      }, true);
    });
  }
}
lightbox();
