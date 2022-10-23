


export class ClearInputs{
     clearValidInputs(element){
        if(element.nextSibling) element.parentNode.removeChild(element.nextSibling);
        element.style.borderColor="#5A698F";
    }

    createInvalidMessage(value,element,msg){
        if(element.nextSibling) element.parentNode.removeChild(element.nextSibling);
        const small=  document.createElement('small');
        small.classList.add('main-color','position-absolute' ,'end-0' , 'fb-sl','invalid');
        const smallText=document.createTextNode((value) ? `${msg}`: "Cant't be Empty");
        small.appendChild(smallText);
        element.parentNode.insertBefore(small,element.nextSibling);
        element.style.borderColor="#FC4747";  
    }

    clearSignUpForm(){
            userConfirmPassword.value="";
            userEmail.value="";
            userPassword.value="";
        }
        
}