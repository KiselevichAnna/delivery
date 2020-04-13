'use strict'
  
const cartButton = document.querySelector(".button-primery1");
const modal      = document.querySelector(".modal");
const close      = document.querySelector(".close");

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click',toggleModal);
function toggleModal(){
    modal.classList.toggle("is-open");
}

new WOW().init();
