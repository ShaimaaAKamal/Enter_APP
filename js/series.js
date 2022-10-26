import { General } from "./modules/generalModule.js";
import { Search } from "./modules/SearchModule.js";

export function displaySeries(){
const search=document.getElementById('Search');
const SearchClass=new Search();
const general=new General();
const seriesCards=document.getElementById('seriesCards');

general.displayCards(general.getData('category','TV Series'),seriesCards);
search.addEventListener('keyup',(e)=>{
    SearchClass.handleSearch(e,general.getData('category','TV Series'));
})
}

