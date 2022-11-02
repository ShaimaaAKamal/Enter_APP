import { General } from "./modules/GeneralModule.js";

export function displayAlreadyWatching(){
const general=new General();
const alreadyWatching=JSON.parse(localStorage.getItem('user')).alreadyWatching;
const alreadyWatchingElement=document.getElementById('alreadyWatching');
const emptyWatched=document.querySelector('#emptyWatched');
if(alreadyWatching.length !== 0){
    alreadyWatchingElement.classList.remove('d-none');
    emptyWatched.classList.add('d-none');
    general.displayCards(alreadyWatching,alreadyWatchingElement,'alreadyWatching');
}
else{
    alreadyWatchingElement.classList.add('d-none');
    emptyWatched.classList.remove('d-none');
}

}