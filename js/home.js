import { data } from "./data.js";
import { CreateElemnts } from "./modules/Validation/createElements.js";
const trending=data.filter(entry=>entry.isTrending === true);
const recommended=data.filter(entry=>entry.isTrending !== true);
const trendBlock=document.getElementById('trending');
const recommendCards=document.getElementById('recommendCards');
const createElemnts=new CreateElemnts();

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