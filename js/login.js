import { Validation } from "./modules/Validation/validate.js";
import { ClearInputs } from "./modules/Validation/clearModule.js";

const authUser=localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')):false;
if(authUser){
    window.location.replace(`index.html`);
}

const validation=new Validation();
const clearInputs=new ClearInputs();
const loginBtn=document.querySelector('#loginBtn');
const userEmail=document.querySelector('#userEmail');
const userPassword=document.querySelector('#userPassword');
const existed=document.getElementById('existed');
const users=(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
let logged=authUser;


function handleLogin(){
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
      const password=userPassword.value;
      const email=userEmail.value;
      if(validation.formValidate(userEmail,userPassword,clearInputs.clearValidInputs,clearInputs.createInvalidMessage)){
        const existedUser= users.find(user=>user.email === email);
        if(!existedUser){
            clearInputs.createInvalidMessage(email,userEmail,`This Email isn't exist`);
         }
         else{
             if(existedUser.password !== password) existed.classList.remove('d-none');
             else{
                 logged=true;
                 localStorage.setItem('user',JSON.stringify(existedUser));
                 localStorage.setItem('logged',JSON.stringify(logged));
                 window.location.replace(`index.html`);
            }
         }
        
      }
}




loginBtn.addEventListener('click',handleLogin);

userEmail.addEventListener('focus',(e)=>{
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
    clearInputs.clearValidInputs(e.target);
})


userPassword.addEventListener('focus',(e)=>{
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
    clearInputs.clearValidInputs(e.target);
})

