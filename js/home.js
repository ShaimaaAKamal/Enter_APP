
import { CreateElemnts } from "./modules/Validation/createElements.js";
import { General } from "./modules/GeneralModule.js";
import { Search } from "./modules/SearchModule.js";

export function displayHome(){
const SearchClass=new Search();
const search=document.getElementById('Search');
const trendBlock=document.getElementById('trending');
const recommendCards=document.getElementById('recommendCards');
const createElemnts=new CreateElemnts();
const general=new General();


async function buildTrend(){
    let script = document.createElement('script');
    script.src = "js/owlCarso.js";
    const trendCarsouel=createElemnts.createCarsouel();
    await general.displayTrends(general.getData('isTrending',true),trendCarsouel)
    await trendBlock.appendChild(trendCarsouel);
    document.body.append(script);
}
buildTrend();

general.displayCards(general.getData('isTrending',false),recommendCards);

search.addEventListener('keyup',(e)=>{
    SearchClass.handleSearch(e,general.retrieveData());
})
}
