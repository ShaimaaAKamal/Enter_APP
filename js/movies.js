import { General } from "./modules/generalModule.js";
import { Search } from "./modules/SearchModule.js";

export function displayMovies(){
const search=document.getElementById('Search');
const SearchClass=new Search();
const general=new General();
const moviesCard=document.getElementById('moviesCard');


general.displayCards(general.getData('category','Movie'),moviesCard)
search.addEventListener('keyup',(e)=>{
    SearchClass.handleSearch(e,general.getData('category','Movie'));
})

}