const validate = document.querySelector('.send_button');
const inputs = document.querySelectorAll('form input,textarea');

// eslint-disable-next-line no-unused-vars
let data = [];
let dataPrenom = null;
let dataNom = null;
let dataMail = null;
let dataMessage = null;

// eslint-disable-next-line no-unused-vars
function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
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

inputs.forEach((input) => {
  input.addEventListener('keypress', () => {
    const label = input.name;
    const inputValue = input.value;
    switch (label) {
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
    // eslint-disable-next-line no-return-assign
    return data = [
      dataPrenom, dataNom, dataMail, dataMessage,
    ];
  });
});

validate.addEventListener('click', (e) => {
  e.preventDefault();
  closeModal();
  console.log(data);
});
