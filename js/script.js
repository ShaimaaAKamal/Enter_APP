import { data } from "./data.js";

const logged=localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')):false;
const userImage=document.querySelector('#userImage');
const userIcon=document.querySelector('#userIcon');
const logoutIcon=document.querySelector('#logoutIcon');
const bookmarkNavIcon=document.querySelector('#bookIcon');
const profile=(localStorage.getItem('profile'))?JSON.parse(localStorage.getItem('profile')):false;




if(logged){
    bookmarkNavIcon.classList.remove('d-none')
    loggedUser();
    if(profile){
        logoutIcon.classList.remove('d-none');
        userImage.classList.add('d-none');
    }
    else{
        logoutIcon.classList.add('d-none');
        userImage.classList.remove('d-none');
    }
}
else{
    bookmarkNavIcon.classList.add('d-none')
    unloggedUser();
}

function loggedUser(){
    userImage.classList.remove('d-none');
    userIcon.classList.add('d-none');

    userImage.addEventListener('click',function(e){
        e.preventDefault();
        localStorage.setItem('profile',JSON.stringify(true));
        window.location.replace(`profile.html`);
    });
    logoutIcon.addEventListener('click',function(e){
          localStorage.setItem('logged',JSON.stringify(false));
          localStorage.setItem('profile',JSON.stringify(false));
          localStorage.removeItem('user');
          window.location.replace(`index.html`);
    });
  
}

function unloggedUser(){
    userImage.classList.add('d-none');
    userIcon.classList.remove('d-none');
    logoutIcon.classList.add('d-none');
}


