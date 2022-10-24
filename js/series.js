import { data } from "./data.js";
import { CreateElemnts } from "./modules/Validation/createElements.js";

const createElemnts=new CreateElemnts();
const seriesCards=document.getElementById('seriesCards');
const series=data.filter(entry=>entry.category === 'TV Series');

series.forEach(trend => seriesCards.appendChild(createElemnts.createRecommend(trend)));
