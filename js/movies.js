import { General } from "./modules/generalModule.js";

export function displayMovies(){

const general=new General();
const moviesCard=document.getElementById('moviesCard');


general.displayCards(general.getData('category','Movie'),moviesCard)


}