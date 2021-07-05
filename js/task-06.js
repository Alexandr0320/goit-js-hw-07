'use strict';


const validInput = document.getElementById("validation-input");

const totalLenght = validInput.getAttribute("data-length");
const intTotallenght = parseInt(totalLenght);

validInput.oninput = function() {
  if (validInput.value.length === intTotallenght) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  }
   if (validInput.value.length !== intTotallenght && validInput.value.length !== 0) {
    validInput.classList.add("invalid");
  }
};