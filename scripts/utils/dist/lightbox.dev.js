"use strict";

function lightbox() {
  var gallery, titles, _loop, i;

  return regeneratorRuntime.async(function lightbox$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(displayGallery());

        case 2:
          gallery = document.querySelectorAll('.gallery-img-link');
          titles = document.querySelectorAll('.gallery-img-link img[title]');

          _loop = function _loop(i) {
            var title = '';
            title = titles[i].title;
            var str = gallery[i].href; // Récupération de la chaine de caractère lien

            gallery[i].addEventListener('click', function (e) {
              e.preventDefault();
              var currentLink = i;
              var container = document.body;
              var newLightbox = document.createElement('div'); // création de ma lightbox

              newLightbox.classList.add('lightbox');
              container.appendChild(newLightbox);
              console.log(title); // Affichage video

              function previewVideo() {
                var newImg = document.createElement('div');
                newImg.classList.add('lightbox__container');
                var h3 = document.createElement('h3');
                var video = document.createElement('video');
                video.setAttribute('controls', '');
                var source = document.createElement('source');
                h3.textContent = title;
                source.setAttribute('src', gallery[currentLink].href);
                source.setAttribute('type', 'video/mp4');
                newImg.appendChild(video);
                newImg.appendChild(h3);
                video.appendChild(source);
                newLightbox.appendChild(newImg);
              } // Affichage image


              function preview() {
                var newImg = document.createElement('div');
                var h3 = document.createElement('h3');
                h3.textContent = title;
                newImg.classList.add('lightbox__container');
                var imgFull = document.createElement('img');
                imgFull.setAttribute('src', gallery[currentLink].href);
                imgFull.setAttribute('role', 'img');
                imgFull.setAttribute('alt', 'photographie de ');
                newImg.appendChild(imgFull);
                newLightbox.appendChild(newImg);
                newImg.appendChild(h3);
              }

              if (str.includes('.mp4')) {
                // Distinction image / video au chargement de la lightBox
                previewVideo();
              } else {
                preview();
              } // Injection des flèches
              // eslint-disable-next-line no-shadow


              var lightbox = document.querySelector('.lightbox');
              lightbox.innerHTML += "\n                        <button class=\"lightbox__close\">Fermer</button>\n                        <button class=\"lightbox__next\">Suivant</button>\n                        <button class=\"lightbox__prev\">Pr\xE9c\xE9dent</button>\n                "; // Fermeture de la lightbox

              var close = document.querySelector('.lightbox__close');
              close.addEventListener('click', function () {
                document.querySelector('.lightbox').remove();
              }); // Affichage image precedente

              var previousButton = document.querySelector('.lightbox__prev');
              previousButton.addEventListener('click', function () {
                document.querySelector('.lightbox__container').remove();
                currentLink -= 1; // Décrementation lien précédent

                if (currentLink === 0) {
                  document.querySelector('.lightbox__prev').remove();

                  if (gallery[currentLink].href.includes('.mp4')) {
                    // Distinction image / video au chargement de la lightBox
                    previewVideo();
                  } else {
                    preview();
                  }
                } else if (gallery[currentLink].href.includes('.mp4')) {
                  // Distinction image / video au chargement de la lightBox
                  previewVideo();
                } else {
                  preview();
                }
              }); // Affichage image suivante

              var nextButton = document.querySelector('.lightbox__next');
              nextButton.addEventListener('click', function () {
                document.querySelector('.lightbox__container').remove();
                currentLink += 1; // Incrementation lien suivant

                if (currentLink >= gallery.length - 1) {
                  if (gallery[currentLink].href.includes('.mp4')) {
                    // Distinction image / video au chargement de la lightBox
                    previewVideo();
                  } else {
                    preview();
                  }

                  document.querySelector('.lightbox__next').remove();
                } else if (gallery[currentLink].href.includes('.mp4')) {
                  // Distinction image / video au chargement de la lightBox
                  previewVideo();
                } else {
                  preview();
                }
              }); // KeyboardEvents ==> Accessibility //
              // Close lightbox

              window.addEventListener('keydown', function (event) {
                if (event.defaultPrevented) {
                  return;
                }

                switch (event.key) {
                  case 'ArrowLeft':
                    document.querySelector('.lightbox__container').remove();
                    currentLink -= 1; // Décrementation lien précédent

                    if (currentLink === 0) {
                      document.querySelector('.lightbox__prev').remove();

                      if (gallery[currentLink].href.includes('.mp4')) {
                        // Distinction image / video au chargement de la lightBox
                        previewVideo();
                      } else {
                        preview();
                      }
                    } else if (gallery[currentLink].href.includes('.mp4')) {
                      // Distinction image / video au chargement de la lightBox
                      previewVideo();
                    } else {
                      preview();
                    }

                    break;

                  case 'ArrowRight':
                    document.querySelector('.lightbox__container').remove();
                    currentLink += 1; // Incrementation lien suivant

                    if (currentLink >= gallery.length - 1) {
                      if (gallery[currentLink].href.includes('.mp4')) {
                        // Distinction image / video au chargement de la lightBox
                        previewVideo();
                      } else {
                        preview();
                      }

                      document.querySelector('.lightbox__next').remove();
                    } else if (gallery[currentLink].href.includes('.mp4')) {
                      // Distinction image / video au chargement de la lightBox
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
          };

          for (i = 0; i < gallery.length; i += 1) {
            _loop(i);
          }

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

lightbox();