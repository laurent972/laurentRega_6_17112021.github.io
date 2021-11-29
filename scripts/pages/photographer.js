//Mettre le code JavaScript lié à la page photographer.html
async function setPhotographer(){
    const photographer = [
        {
            "name": "Ma data test",
            "id": 1,
            "city": "Paris",
            "country": "France",
            "tagline": "Ceci est ma data test",
            "price": 400,
            "portrait": "account.png"
        }
    
    ]
    
   // return photographer

    console.log(photographer);

    photographer.forEach(element=> element)
}
setPhotographer()


const photographer = [
    {
        "name": "Ma data test",
        "id": 1,
        "city": "Paris",
        "country": "France",
        "tagline": "Ceci est ma data test",
        "price": 400,
        "portrait": "account.png"
    }
]

const gallery =[
    {
        "media": [
            {
                "id": 342550,
                "photographerId": 1,
                "title": "Fashion Yellow Beach",
                "image": "Architecture_Connected_Curves.jpg",
                "likes": 62,
                "date": "2011-12-08",
                "price": 55
            },  
            {
                "id": 8520927,
                "photographerId": 1,
                "title": "Fashion Urban Jungle",
                "image": "Architecture_Cross_Bar.jpg",
                "likes": 11,
                "date": "2011-11-06",
                "price": 55
            },
             {
                "id": 8520927,
                "photographerId": 3,
                "title": "Fashion Urban Jungle",
                "image": "Architecture_White_Light.jpg",
                "likes": 11,
                "date": "2011-11-06",
                "price": 55
            },
            {
                "id": 8520927,
                "photographerId": 4,
                "title": "Fashion Urban Jungle",
                "image": "Sport_Jump.jpg",
                "likes": 11,
                "date": "2011-11-06",
                "price": 55
            }
        ]
    }

]
    



        const photographHeader = document.querySelector('.photograph-header');
            photographer.forEach(element=> {
            const photographerFiche =  photographerFactory(element);
            const photographerFicheDisplay = photographerFiche.getUserCardDOM();
            photographHeader.appendChild(photographerFicheDisplay)
                }
            );

        const displayGallery = document.querySelector(".gallery");



        //Créer une fctory pour la fiche Photographer
        //Déterminer UserId
        const photographerId=gallery.forEach(element=> console.log(element.media.photographerId))
        console.log(photographerId);

         gallery.forEach(element=>{
                element.media.forEach(element => {
                   image = element.image;
                   displayGallery.innerHTML +=`
                        <img width="150" src="../assets/photographers/Madatatest/${image}">
                     `
                   console.log(image);
                });

                for(let i=0; i<element.media.length;i++){
                    let image = element.media[i].image;
                    console.log(image);
                    displayGallery.innerHTML +=`
                        <img width="150" src="../assets/photographers/Madatatest/${image}">
                     `
                }
         })  
         


        
     

         