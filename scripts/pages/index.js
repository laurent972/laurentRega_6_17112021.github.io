   
   async function getPhotographers() {
    await fetch('data/photographers.json')
      // await fetch('../data/photographers.json')
                        .then((response) => response.json())
                        .then((data) => photographers = data.photographers);
        //console.log(photographers);
        return photographers;
    };


    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            //console.log(photographer.id);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        let photographers  = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    