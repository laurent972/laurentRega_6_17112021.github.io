let photographers= []
async function getPhotographers() {

    await fetch('../data/photographers.json')
                     .then((response)=>response.json())
                     .then((data)=> photographers = data.photographers);
     //console.log(photographers);
     return photographers;
 }

const query_url_id = window.location.search;
console.log(query_url_id);

// Récupérer ID
const idFiche = query_url_id.slice(4);
console.log(idFiche);

const urlSearchParams = new URLSearchParams(query_url_id);
const _id = urlSearchParams.get("id");
console.log(_id);

async function displayFiche(){
    await getPhotographers()
    const resultat = photographers.find( photographer =>photographer.id == _id);
     console.log(resultat);
}

displayFiche()
   