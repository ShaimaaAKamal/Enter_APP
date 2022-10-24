import { data } from "./data.js";
import { CreateElemnts } from "./modules/Validation/createElements.js";
const createElemnts=new CreateElemnts();
const movies=data.filter(entry=>entry.category === 'Movie');
const moviesCard=document.getElementById('moviesCard');
movies.forEach(trend => moviesCard.appendChild(createElemnts.createRecommend(trend)));
