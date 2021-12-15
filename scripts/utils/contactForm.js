const validate = document.querySelector(".send_button");
const form = document.querySelector('form');
let inputs = document.querySelectorAll('form input,textarea');
const query_url = window.location.href;

let data = [];
let dataPrenom=null;
let dataNom=null;
let dataMail=null;
let dataMessage=null;


function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


inputs.forEach(input=>{
    input.addEventListener('keypress',()=>{
        label = input.name;
        inputValue = input.value;
        
        switch(label){
          case 'prenom':
            dataPrenom = inputValue;
            break;
            case 'nom':
              dataNom = inputValue;
            break;
            case 'email':
              dataMail = inputValue;
            break;
            case 'message':
              dataMessage = inputValue;
              break;
            default:
              break;
        }

        return data = {dataPrenom,dataNom,dataMail,dataMessage};
      
    })
})

validate.addEventListener('click',(e)=>{
    e.preventDefault();
    //form.setAttribute('action', query_url);
    console.log(data);
    closeModal();
 });