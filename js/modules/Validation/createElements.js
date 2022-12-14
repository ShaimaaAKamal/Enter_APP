import { General } from "../GeneralModule.js";
import { displayBookmarked } from "../../bookmared.js";


const logged=localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')):false;
export class CreateElemnts{

    createTrendings(trend,type){
        const parentDiv= this.createInfoPart(trend,'trend');
        parentDiv.appendChild(this.createInfo(trend,'trend'));
        if(logged){
            parentDiv.addEventListener('click',function(e){
                const general=new General();
                const title=this.children[0].alt;
                const watching =general.getData('title',title)[0];
                const user=JSON.parse(localStorage.getItem('user'));
                const alreadyWatching=user.alreadyWatching;
                if(general.filterData(alreadyWatching,'title',title).length === 0){
                    alreadyWatching.push(watching);
                    user.alreadyWatching=alreadyWatching;
                    localStorage.setItem('user',JSON.stringify(user));
                };
             });
        }
        return parentDiv;
    }

     createRecommend(trend,type=''){
        const parentDiv=document.createElement('div');
        if(type === 'alreadyWatching')
        parentDiv.classList.add('col-lg-4','col-sm-6','cardR');
        else
        parentDiv.classList.add('col-lg-3', 'col-md-4','col-sm-6','cardR');
        const child1=this.createInfoPart(trend,'recommend');
        parentDiv.appendChild(child1);
        parentDiv.appendChild(this.createInfo(trend,'recommend'));
        parentDiv.appendChild(this.createTitle(trend,'fh-xsm'));
        if(logged){
            parentDiv.addEventListener('click',function(e){
                const general=new General();
                const title=this.children[0].children[0].alt;
                const watching =general.getData('title',title)[0];
                const user=JSON.parse(localStorage.getItem('user'));
                const alreadyWatching=user.alreadyWatching;
                if(general.filterData(alreadyWatching,'title',title).length === 0){
                    alreadyWatching.push(watching);
                    user.alreadyWatching=alreadyWatching;
                    localStorage.setItem('user',JSON.stringify(user));
                };
             });
        }
        return parentDiv;
    }
     
    createInfoPart(trend,type){
        const div=document.createElement('div');
        div.classList.add('position-relative', 'rounded-3','trend');
        div.appendChild(this.createImageElement(trend,type));
        div.appendChild(this.createBookmarked(trend));
        div.appendChild(this.createPlay());
        return div;
    }

    createPlay(){
        const parentDiv=document.createElement('div');
        parentDiv.classList.add('position-absolute','play');
        const div=document.createElement('div');
        div.classList.add('d-flex' ,'align-items-center' , 'bg-opacity-50' , 'bg-white' ,'py-2', 'rounded-5', 'px-3');
        div.innerHTML=`<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/>
      </svg>
      <span class=" ms-3 me-2  text-white fh-xsm fw-normal">Play</span>`
      parentDiv.appendChild(div);
      return parentDiv;
    }

    createCarsouel(){
        const div=document.createElement('div');
        div.classList.add("owl-carousel");
        div.setAttribute('id','trendCarsouel');
        return div;
    }

    createImageElement(trend,type){
        const img=document.createElement('img');
        img.setAttribute('alt',trend.title);
        if(type==='trend')
          img.setAttribute('src',trend.thumbnail.trending.large);
        else
        img.setAttribute('src',trend.thumbnail.regular.medium);
        img.classList.add('w-100', 'rounded-3');

       
        return img;
    }

     createBookmarked(trend){
        const div=document.createElement('div');
        div.classList.add('rounded-circle','position-absolute','p-7','idle-bookmark','bookmark-position');

        div.innerHTML=`<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" />
          </svg>`;
       
        const logged=localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')):false;
         if(logged){
            if(trend.isBookmarked){
                div.children[0].children[0].style.fill='#fff';
            }
            div.addEventListener('click',function(e){
                const users=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
                const user=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):false;
               const page=localStorage.getItem('page')?JSON.parse(localStorage.getItem('page')):'';
                e.stopPropagation();
                const path=this.children[0].children[0];
                const trendIndex = user.data.findIndex(function(entry){
                    return     entry.title=== trend.title
                 });
                if(path.style.fill)
                   {  path.style.fill=null;
                      trend.isBookmarked=false;
                   }
                else
                  { path.style.fill='#fff';
                    trend.isBookmarked=true;
                   }
                   user.data[trendIndex]=trend;
                   localStorage.setItem('user',JSON.stringify(user));
                   users[user.id-1]=user
                   localStorage.setItem('users',JSON.stringify(users));
                   const bookmarkMoviesElement=document.querySelector('#bookmarkMovies');
                   const bookmarkSeriesElement=document.querySelector('#bookmarkSeries');
                   if(page === 'bookmarked'){
                    bookmarkMoviesElement.innerHTML='';
                    bookmarkSeriesElement.innerHTML='';
                       displayBookmarked();
                   }

        });}
       
        return div;
    }

    createInfo(trend,type){
        let bookmark;
        if(trend.category ==='Movie')
         bookmark=`<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" class="me-1">
        <path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/>
        </svg> <span>${trend.category}</span>`
        else{
            bookmark=`<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" class="me-1">
            <path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75"/>
          </svg><span>${trend.category}</span>`
        }
        const PDiv=document.createElement('div');
        if(type === 'trend')
            PDiv.classList.add('position-absolute','px-3','text-white','fb-sl','heading-position','opacity-75');
        else
            PDiv.classList.add('d-flex','align-items-center','mb-1','fb-sl','mt-2','opacity-75','text-white');
            const infoDiv=document.createElement('div');
                    infoDiv.classList.add('d-flex','align-items-center','mb-1');
                    infoDiv.appendChild(this.createParagraph(['mb-0','me-3'],trend.year));
                    infoDiv.appendChild(this.createParagraph(['mb-0' , 'd-flex', 'align-items-center', 'me-3', 'dotPa' ,'position-relative'],bookmark));
                    infoDiv.appendChild(this.createParagraph(['mb-0'],trend.rating));
                PDiv.appendChild(infoDiv);
                if(type === 'trend')
                PDiv.appendChild(this.createTitle(trend,'fh-ml'));
        return PDiv;
    }

 createParagraph(classess,data){
    const p =document.createElement('p');
     p.classList.add(...classess);
     p.innerHTML=data;
     return p;
}

 createTitle(trend,font){
    const h4=document.createElement('h4');
    h4.classList.add('text-white',font);
    h4.innerHTML=trend.title;
    return h4;
    
}


}