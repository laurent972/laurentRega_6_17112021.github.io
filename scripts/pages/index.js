
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
       
        const photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
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


        // et bien retourner le tableau photographers seulement une fois 
        
        // let object = {clé: valeur};

        return(
                {
                  photographers: [... photographers]
                }
        )
            
    }
  
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            const photographerLink = photographers.map(e=>e.id);
            
            photographersSection.appendChild(userCardDOM);
            userCardDOM.addEventListener('click', event=>{
                window.open(`photographer.html?${photographerLink}`, "_self");
            })
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    