import { Search } from "./modules/SearchModule.js";
import { General } from "./modules/GeneralModule.js";

export function displayBookmarked(){
const search=document.getElementById('Search');
const SearchClass=new Search();
const general=new General();
const emptyBookmarkedElement=document.querySelector('#emptyBookmarked');
const bookmarkedElement=document.querySelector('#bookmarked');
const bookmarkSeriesParent=document.getElementById('bookmarkSeriesParent');
const bookmarkMoviesParent=document.getElementById('bookmarkMoviesParent');
const bookmarkMoviesElement=document.querySelector('#bookmarkMovies');
const bookmarkSeriesElement=document.querySelector('#bookmarkSeries');


const bookmarked=general.getData('isBookmarked',true);

if(bookmarked.length !== 0){
    bookmarkedElement.classList.remove('d-none');
    emptyBookmarkedElement.classList.add('d-none')  

   
    const bookmarkedSeries=general.filterData(bookmarked,'category','TV Series');
    const bookmarkedMovies=general.filterData(bookmarked,'category','Movie')

    if(bookmarkedSeries.length !==0 && bookmarkedMovies.length !==0){

        general.showElement(bookmarkSeriesParent);
        general.showElement(bookmarkMoviesParent);
        general.displayCards(bookmarkedSeries,bookmarkSeriesElement);
        general.displayCards(bookmarkedMovies,bookmarkMoviesElement)
    }
    else if(bookmarkedMovies.length !==0){
        general.showElement(bookmarkMoviesParent);
        general.hideElement(bookmarkSeriesParent);
        general.displayCards(bookmarkedMovies,bookmarkMoviesElement)
    }
    else if(bookmarkedSeries.length !==0){
        general.showElement(bookmarkSeriesParent);
        general.hideElement(bookmarkMoviesParent);
        general.displayCards(bookmarkedSeries,bookmarkSeriesElement);
    }

    search.addEventListener('keyup',(e)=>{
        SearchClass.handleSearch(e,general.getData('isBookmarked',true));
    })

}
else{
    general.showElement(emptyBookmarkedElement);
    general.hideElement(bookmarkedElement);
}

}