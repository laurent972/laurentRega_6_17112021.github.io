   
   let photographers= []
   async function getPhotographers() {

       await fetch('../data/photographers.json')
                        .then((response)=>response.json())
                        .then((data)=> photographers = data.photographers);
        //console.log(photographers);
        return photographers;
    }

                 

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            console.log(photographer.id);
            let id= photographer.id;
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);

            userCardDOM.addEventListener('click', event=>{
                window.open(`photographer.html?id=${id}`, "_self");
            })

        });
    };

    async function init() {
        // Récupère les datas des photographes
         photographers  = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    