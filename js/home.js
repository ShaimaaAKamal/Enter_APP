import { data } from "./data.js";
import { CreateElemnts } from "./modules/Validation/createElements.js";

const logged=localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')):false;
let displayedData=[...data];
let trending, recommended
const trendBlock=document.getElementById('trending');
const recommendCards=document.getElementById('recommendCards');
const createElemnts=new CreateElemnts();

(function (){
if(logged){
      displayedData=JSON.parse(localStorage.getItem('user')).data;
}
    trending=displayedData.filter(entry=>entry.isTrending === true);
    recommended=displayedData.filter(entry=>entry.isTrending !== true);
})();

async function buildTrend(){
    let script = document.createElement('script');
    script.src = "js/owlCarso.js";
    const trendCarsouel=createElemnts.createCarsouel();
    await trending.forEach(trend => trendCarsouel.appendChild(createElemnts.createTrendings(trend)));
    await trendBlock.appendChild(trendCarsouel);
    document.body.append(script);
}
buildTrend();

recommended.forEach(trend => recommendCards.appendChild(createElemnts.createRecommend(trend)));