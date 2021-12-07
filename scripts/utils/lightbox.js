// // class Lightbox{
  
// //     static init(){
// //         links = document.querySelectorAll('a[href$=".jpg"],a[href$=".mp4"]')
// //        .forEach(link => link.addEventListener('click', e =>{
// //                 e.preventDefault()
// //                 new Lightbox(e.currentTarget.getAttribute('href'))
// //         }));
// //     }

// //     //paramètre string
// //     constructor(url){
// //         this.element = this.buildDOM(url);
// //         document.body.appendChild(this.element);
// //     }

// //     loadImage(url){
// //         const image = new Image();
// //         const container = this.element.querySelector('.lightbox__container')
// //         image.onload = function(){

// //         } 
// //     }

// //     buildDOM(url){
// //         const dom = document.createElement('div');
// //         dom.classList.add('lightbox');
// //         dom.innerHTML = `
        
// //         <button class="lightbox__close">Fermer</button>
// //         <button class="lightbox__next">Suivant</button>
// //         <button class="lightbox__prev">Précédent</button>
// //         <div class="lightbox__container">
// //           <img src="${url}">
// //         </div>


// //         `
// //         return dom
// //     }

// // }




// let getLatestOpenedImg;

// async function getLinks(){
//     await displayGallery();
//     let galleryImages = document.querySelectorAll('.gallery-img-link');
//     if(galleryImages){
//         galleryImages.forEach(function (galleryImage, index) {
            
//             galleryImage.addEventListener('click', e => {
//              e.preventDefault();
//                let getFullImgUrl = galleryImage.href; // je récupère l'url de chaque image
//                console.log(galleryImage.href);
//                getLatestOpenedImg = index + 1;
               

//                let container = document.body;
//                let newImageWindow = document.createElement('div'); //création de ma lightbox
//                newImageWindow.classList.add('lightbox');
             
//                newImageWindow.setAttribute('id', "current-img");
//                container.appendChild(newImageWindow); //injection de ma lightbox

//                let newImg = document.createElement("div"); 
//                newImg.classList.add('lightbox__container')
//               // newImg.setAttribute('onclick', "closeImg()");
//                let imgFull = document.createElement('img');
//                imgFull.setAttribute('src', getFullImgUrl);
//                newImg.appendChild(imgFull);
//                newImageWindow.appendChild(newImg);
       
//                const lightbox = document.querySelector('.lightbox');
//                lightbox.innerHTML +=`
//                     <button class="lightbox__close">Fermer</button>
//                     <button onclick="changeImg(1)" class="lightbox__next">Suivant</button>
//                     <button class="lightbox__prev">Précédent</button>
//                `;  
               
            
//               })
//               console.log(getLatestOpenedImg);
//            }) 
           
//     } 
//     return {getLatestOpenedImg, galleryImages}
             
//     }
    
//     console.log(getLatestOpenedImg);

//    async function changeImg(changeDir){
//         await getLinks()
//         let galleryImages = document.querySelectorAll('.gallery-img-link');
       
//          document.querySelector('#current-img').remove();
//          let getImgWindow = document.querySelector('.lightbox__container');
//          let newImg = document.createElement("img");
//          getImgWindow.appendChild(newImg);
     
//          let calcNewImg;
//          if(changeDir === 1){
//              calcNewImg = getLatestOpenedImg + 1;
//              if(calcNewImg > galleryImages.length){
//                  calcNewImg = 1;
//              }
//          }else if(changeDir === 0){
//              calcNewImg = getLatestOpenedImg - 1;
//              if(calcNewImg < 1){
//                  calcNewImg = galleryImages.length;
//              }
//          }
//          console.log(galleryImages[calcNewImg].href);
//          newImg.setAttribute('src', galleryImages[calcNewImg].href);
//          newImg.setAttribute('id', "current-img");
//      }


//   getLinks();

// function closeImg(){
//     document.querySelector('.lightbox').remove();
//     document.querySelector('.lightbox__prev').remove();
//     document.querySelector('.lightbox__next').remove();
// }

