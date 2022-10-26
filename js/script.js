import { displayBookmarked } from "./bookmared.js";
import { displayHome } from "./home.js";
import { login } from "./login.js";
import { displayMovies } from "./movies.js";
import { displaySeries } from "./series.js";
import { signUp } from "./signUp.js";
import { checkLogging } from "./checkLogging.js";

const page=(localStorage.getItem('page'))?JSON.parse(localStorage.getItem('page')):'';
let check=false;

switch(page){
    case 'index': displayHome();
    check =true;
    break;
    case 'series': displaySeries();
    check =true;
    break;
    case 'movies': displayMovies();
    check =true;
    break;
    case 'bookmarked': displayBookmarked();
    check =true;
    break;
    case 'profile':  check =true;;
    break;
    case 'signUP': signUp();
    break;
    case 'login': login();
    break;
    default: break;
}


if(check)  checkLogging();



