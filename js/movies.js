import { General } from "./modules/generalModule.js";

const general=new General();
const moviesCard=document.getElementById('moviesCard');

general.displayCards(general.getData('category','Movie'),moviesCard)

