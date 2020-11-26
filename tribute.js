//Select element function

const selectElement = function (element) {
    return document.querySelector(element);
};

//create variable

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});
