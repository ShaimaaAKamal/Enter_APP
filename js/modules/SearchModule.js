import { General } from "./GeneralModule.js";
const general=new General();

export class Search{
        handleSearch(e,data){
        const mainBody=document.querySelector('.mainBody');
        const searchResult=document.querySelector('#searchResult');
        const searchBody=document.querySelector("#searchBody");
        mainBody.classList.add('d-none');
        const searchValue=e.target.value;
        if(searchValue !== '')
        {
            const find=data.filter(entry=> entry['title'].toLocaleLowerCase().includes(searchValue) );
            searchBody.innerHTML='';
            searchResult.classList.remove('d-none');
    
            if(find.length !== 0){
                searchResult.innerHTML=`Found ${find.length} results for ${searchValue}`;
                searchBody.classList.remove('d-none')
                general.displayCards(find,searchBody);
            }
            else{
                searchResult.innerHTML=`Found no results for ${searchValue}`;
            }
        }
        else{
            searchBody.classList.add('d-none');
            searchResult.classList.add('d-none');
            mainBody.classList.remove('d-none');
    
        }
    }
}