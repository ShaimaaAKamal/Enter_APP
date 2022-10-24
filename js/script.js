import { data } from "./data.js";
import { CreateElemnts } from "./modules/Validation/createElements.js";
const createElemnts=new CreateElemnts();
const logged=localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')):false;
const userImage=document.querySelector('#userImage');
const userIcon=document.querySelector('#userIcon');
const logoutIcon=document.querySelector('#logoutIcon');
const profile=(localStorage.getItem('profile'))?JSON.parse(localStorage.getItem('profile')):false;
const movies=data.filter(entry=>entry.category === 'Movie');
const series=data.filter(entry=>entry.category === 'TV Series');
const trending=data.filter(entry=>entry.isTrending === true);
const recommended=data.filter(entry=>entry.isTrending !== true);
const trendBlock=document.getElementById('trending');
const recommendCards=document.getElementById('recommendCards');


async function buildTrend(){
    let script = document.createElement('script');
    script.src = "js/owlCarso.js";
    const trendCarsouel=createElemnts.createCarsouel();
    await trending.forEach(trend => trendCarsouel.appendChild(createElemnts.createTrendings(trend)));
    await trendBlock.appendChild(trendCarsouel);
    document.body.append(script);
}
buildTrend();

recommended.forEach(trend => recommendCards.appendChild(createElemnts.createRecommend(trend)));


if(logged){

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
          window.location.replace(`index.html`);
    });
  
}

function unloggedUser(){
    userImage.classList.add('d-none');
    userIcon.classList.remove('d-none');
    logoutIcon.classList.add('d-none');
}


