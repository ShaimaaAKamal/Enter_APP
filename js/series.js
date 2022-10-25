import { General } from "./modules/generalModule.js";


const general=new General();
const seriesCards=document.getElementById('seriesCards');

general.displayCards(general.getData('category','TV Series'),seriesCards)

