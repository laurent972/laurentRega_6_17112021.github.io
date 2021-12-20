async function lightbox() {
  // eslint-disable-next-line no-undef
  await displayGallery();
  const gallery = document.querySelectorAll('.gallery-img-link');
  for (let i = 0; i < gallery.length; i += 1) {
    const str = gallery[i].href; // Récupération de la chaine de caractère lien
    gallery[i].addEventListener('click', (e) => {
      e.preventDefault();
      let currentLink = i;
      const container = document.body;
      const newLightbox = document.createElement('div'); // création de ma lightbox
      newLightbox.classList.add('lightbox');
      container.appendChild(newLightbox);
      // Affichage video
      function previewVideo() {
        const newImg = document.createElement('div');
        newImg.classList.add('lightbox__container');
        const video = document.createElement('video');
        video.setAttribute('controls', '');
        const source = document.createElement('source');
        source.setAttribute('src', gallery[currentLink].href);
        source.setAttribute('type', 'video/mp4');
        newImg.appendChild(video);
        video.appendChild(source);
        newLightbox.appendChild(newImg);
      }
      // Affichage image
      function preview() {
        const newImg = document.createElement('div');
        newImg.classList.add('lightbox__container');
        const imgFull = document.createElement('img');
        imgFull.setAttribute('src', gallery[currentLink].href);
        imgFull.setAttribute('role', 'img');
        imgFull.setAttribute('alt', 'photographie de ');
        newImg.appendChild(imgFull);
        newLightbox.appendChild(newImg);
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
        currentLink -= 1; // Décrementation lien précédent
        if (currentLink === 0) {
          document.querySelector('.lightbox__prev').remove();
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
        document.querySelector('.lightbox__container').remove();
        currentLink += 1; // Incrementation lien suivant
        if (currentLink >= gallery.length - 1) {
          if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
            previewVideo();
          } else {
            preview();
          }
          document.querySelector('.lightbox__next').remove();
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
            document.querySelector('.lightbox__container').remove();
            currentLink -= 1; // Décrementation lien précédent
            if (currentLink === 0) {
              document.querySelector('.lightbox__prev').remove();
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
            document.querySelector('.lightbox__container').remove();
            currentLink += 1; // Incrementation lien suivant
            if (currentLink >= gallery.length - 1) {
              if (gallery[currentLink].href.includes('.mp4')) { // Distinction image / video au chargement de la lightBox
                previewVideo();
              } else {
                preview();
              }
              document.querySelector('.lightbox__next').remove();
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
