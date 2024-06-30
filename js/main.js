const login = document.querySelector ('.js-login');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const subRised = document.querySelector('.js-subrised'); 
const authForm = document.querySelector('.auth-form');

function showLogin () {
  modal.classList.add('open')
}
function hideLogin () {
  modal.classList.remove('open')
}

login.addEventListener('click', showLogin);

modalClose.addEventListener('click', hideLogin);

modal.addEventListener('click', hideLogin);
authForm.addEventListener('click', function(event){
  event.stopPropagation()
});

// mousevent up

document.onkeydown = function(e) {
  console.log (e.which);
  switch(e.which) {
    case 27 :
     modal.classList.remove('open')
    break;
  }
}

// mobile
const navBar = document.querySelector('.navbar__app');
const navBarIcon = document.querySelector('.header-wrapper-navbar-icon');
const navClose = document.querySelector('.navbar__app-header-close-icon');
const mainApp = document.querySelector('.main__app');

function showNavBar () {
  navBar.classList.add('open')
}
function hideNavBar () {
  navBar.classList.remove('open')
}


navBarIcon.addEventListener('click', showNavBar);
navClose.addEventListener('click', hideNavBar);
// navBar.addEventListener('click', function(event){
//   event.stopPropagation()
// });
