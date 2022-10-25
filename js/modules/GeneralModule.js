import { data } from "../data.js";
import { CreateElemnts } from "./Validation/createElements.js";


export class General{
   retrieveData(){
    let displayedData=[...data];
    const logged=localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')):false;
    (function (){
    if(logged){
             displayedData=JSON.parse(localStorage.getItem('user')).data;
    }
    })();

    return displayedData;
   }

   getData(key,searchKey){
    const displayedData=this.retrieveData();
    const category=this.filterData(displayedData,key,searchKey)
                      return category;

   }

   filterData(wholeData,key,searchKey){
    const category=wholeData.filter(entry=> entry[key] === searchKey);
    return category;
   }
   displayCards(category,parentElement){
    const createElemnts=new CreateElemnts();
    category.forEach(trend => parentElement.appendChild(createElemnts.createRecommend(trend)));
   }

   displayTrends(category,parentElement){
    const createElemnts=new CreateElemnts();
    category.forEach(trend => parentElement.appendChild(createElemnts.createTrendings(trend)));
   }

   showElement(element){
    element.classList.remove('d-none');
   }

   hideElement(element){
    element.classList.add('d-none');
   }


}