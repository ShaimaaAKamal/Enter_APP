import { Validation } from "./Validation/validate.js";

const validation=new Validation();
const loginBtn=document.querySelector('#loginBtn');
const userEmail=document.querySelector('#userEmail');
const userPassword=document.querySelector('#userPassword');
const existed=document.getElementById('existed');
const users=(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];



function handleLogin(){
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
      const password=userPassword.value;
      const email=userEmail.value;
      if(validation.formValidate(userEmail,userPassword,clearValidInputs,createInvalidMessage)){
          console.log('valid');
      }
      else{
        console.log('invalid');
      }
}




function clearValidInputs(element){
    if(element.nextSibling) element.parentNode.removeChild(element.nextSibling);
    element.style.borderColor="#5A698F";
}

// function clearSignUpForm(){
//     userConfirmPassword.value="";
//     userRegisterEmail.value="";
//     userRegisterPassword.value="";
// }


function createInvalidMessage(value,element,msg){
    if(element.nextSibling) element.parentNode.removeChild(element.nextSibling);
    const small=  document.createElement('small');
    small.classList.add('main-color','position-absolute' ,'end-0' , 'fb-sl','invalid');
    const smallText=document.createTextNode((value) ? `${msg}`: "Cant't be Empty");
    small.appendChild(smallText);
    element.parentNode.insertBefore(small,element.nextSibling);
    element.style.borderColor="#FC4747";
   
}


loginBtn.addEventListener('click',handleLogin);

userEmail.addEventListener('focus',(e)=>{
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
     clearValidInputs(e.target);
})


userPassword.addEventListener('focus',(e)=>{
    clearValidInputs(e.target);
})

