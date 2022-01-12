const validate = document.querySelector('.send_button');
const inputs = document.querySelectorAll('form input,textarea');
const modal = document.getElementById('contact_modal');
const button = document.querySelector('.contact_button');
const regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPre = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

button.onclick = () => {
    displayModal();
    modal.setAttribute("open", "");
   modal.querySelector("input").focus();
}

modal.addEventListener('transitionend', () => {
  modal.querySelector('input').focus();
});

// eslint-disable-next-line no-unused-vars
let data = [];
let dataPrenom = null;
let dataNom = null;
let dataMail = null;
let dataMessage = null;

// eslint-disable-next-line no-unused-vars
function displayModal() {
  modal.style.display = 'block';
}


function closeModal() {

  modal.style.display = 'none';
}

window.addEventListener('keydown', (event) => {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case 'Escape':
      closeModal();
      break;
    default:
      break;
  }
});

function liveUpdate(){
  inputs.forEach(input=>{ 
    input.addEventListener('keyup', displayError);
    input.addEventListener('click', displayError);
  });
}

function displayError(){
inputs.forEach((input) => {

    const label = input.name;
    const inputValue = input.value;
    switch (label) {
      case 'prenom':

        if(!regexPre.test(inputValue)){
          setError(input,"Veuillez saisir un texte valide");
        }  
        else{
          removeError(input);
          dataPrenom=inputValue;
        }
        
        break;
      case 'nom':
        if(!regexPre.test(inputValue)){
          setError(input,"Veuillez saisir un texte valide");
        }  
        else{
          removeError(input);
          dataNom=inputValue;
        }
        break;
      case 'email':
        if(!regexMail.test(inputValue)){
          setError(input,"L'adresse email n'est pas valide.");

        }else{
          removeError(input);
          dataMail=inputValue;
        }
        break;
      case 'message':
        dataMessage = inputValue;
        break;
      default:
        break;
    }
    // eslint-disable-next-line no-return-assign
    return data = [
      dataPrenom, dataNom, dataMail, dataMessage,
    ];
  });

};

validate.addEventListener('click', (e) => {
  e.preventDefault();
  displayError();
  liveUpdate();
  if(dataPrenom && dataNom && dataMail){
    closeModal()
    console.log(data);
   }
});

//Attribuer erreur aux champs
function setError(input, message){
  let container = input.parentNode;
  container.setAttribute('data-error-visible', 'true');
  container.setAttribute('data-error', message);
};

//Supprimer erreur champs
function removeError(input){
  let container = input.parentNode;
  container.removeAttribute('data-error-visible');
  container.removeAttribute('data-error');
}