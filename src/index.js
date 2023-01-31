import validator from './validator.js';

const validateButton = document.getElementById("btn-validate");
const cardNum = document.getElementById("cardNumber");
const result = document.getElementById("result")

validateButton.addEventListener("click", cardValidation);
validateButton.addEventListener("click", limpar);

cardNum.addEventListener("keyup", cloneNumber);

function cloneNumber() {
  const value = document.getElementById("cardNumber").value;
  const mask = validator.maskify(value);
  document.getElementById("numberClone").value = mask;
}

function limpar(){
  document.getElementById("cardNumber").value = "";
}


function cardValidation(e) {
  e.preventDefault();
  const digValue = cardNum.value;
  const validation = validator.isValid(digValue);
  
  if (
    digValue.trim() === "" ||    
    digValue === "0000000000000000" ||
    digValue === "000000000000000" ||
    digValue === "00000000000000" ||
    digValue.length <= 13
  ) {
    return (result.innerHTML = "Por favor, digite o número do cartão!");
  }  
  else if (validation === true) {
    return (result.innerHTML = "Cartão válido!");
  }
  else if (!validation) {  
    return (result.innerHTML = "Cartão inválido. Digite novamente!");
  } 
}