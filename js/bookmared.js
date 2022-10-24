import { data } from "./data.js";
import { CreateElemnts } from "./modules/Validation/createElements.js";

const createElemnts=new CreateElemnts();
const emptyBookmarkedElement=document.querySelector('#emptyBookmarked');
const bookmarkedElement=document.querySelector('#bookmarked');
const bookmarkMoviesElement=document.querySelector('#bookmarkMovies');
const bookmarkSeriesElement=document.querySelector('#bookmarkSeries');

const bookmarked=data.filter(entry=>entry.isBookmarked === true);
if(bookmarked.length !== 0){
    bookmarkedElement.classList.remove('d-none');
    emptyBookmarkedElement.classList.add('d-none')    
    const bookmarkedSeries=bookmarked.filter(entry=>entry.category === 'TV Series');
    const bookmarkedMovies=bookmarked.filter(entry=>entry.category === 'Movie');
    if(bookmarkedSeries.lenth !==0){
        bookmarkedSeries.forEach(trend => bookmarkSeriesElement.appendChild(createElemnts.createRecommend(trend)));
    }
    if( bookmarkedMovies.lenth !==0){
        bookmarkedMovies.forEach(trend => bookmarkMoviesElement.appendChild(createElemnts.createRecommend(trend)));
    }

}
else{
    bookmarkedElement.classList.add('d-none');
    emptyBookmarkedElement.classList.remove('d-none');
}
