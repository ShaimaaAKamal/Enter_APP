import { General } from "./modules/GeneralModule.js";

export function displayAlreadyWatching(){
const general=new General();
let alreadyWatching=localStorage.getItem('alreadyWatching')?JSON.parse(localStorage.getItem('alreadyWatching')):[];
const alreadyWatchingElement=document.getElementById('alreadyWatching');
const emptyWatched=document.querySelector('#emptyWatched');
if(alreadyWatching.length !== 0){
    alreadyWatchingElement.classList.remove('d-none');
    emptyWatched.classList.add('d-none');
    general.displayCards(alreadyWatching,alreadyWatchingElement);
}
else{
    alreadyWatchingElement.classList.add('d-none');
    emptyWatched.classList.remove('d-none');
}

}