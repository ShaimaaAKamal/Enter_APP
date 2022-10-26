import { Validation } from "./modules/Validation/validate.js";
import { ClearInputs } from "./modules/Validation/clearModule.js";
import { data } from "./data.js";

export function signUp(){
const validation=new Validation();
const clearInputs=new ClearInputs();
const signUpBtn=document.querySelector('#signUpBtn');
const userEmail=document.querySelector('#userEmail');
const userName=document.querySelector('#userName');
const userPassword=document.querySelector('#userPassword');;
const userConfirmPassword=document.querySelector('#userConfirmPassword');
const existed=document.getElementById('existed');
const users=(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
const authUser=localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')):false;
if(authUser){
    window.location.replace(`index.html`);
}

function handleSignUp(){ 
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
    const password=userPassword.value;
    const email=userEmail.value;
    const name=userName.value;
    const repeatPassword=userConfirmPassword.value;
   if(validation.formValidate(userEmail,userPassword,clearInputs.clearValidInputs,clearInputs.createInvalidMessage,userConfirmPassword,userName)){
      if(confirmPassword(password,repeatPassword))
       {
         const existedUser= users.filter(user=>user.email === email);
         if(existedUser.length === 0){
            users.push({
                name,email,password,data,id:users.length+1,type:'regular'
            });
            localStorage.setItem('users',JSON.stringify(users));
            window.location.replace(`login.html`);
         }
         else existed.classList.remove('d-none');
       }
       else{
        clearInputs.createInvalidMessage(password,userPassword,`Password doesn't much`);
        clearInputs.createInvalidMessage(repeatPassword,userConfirmPassword,`Password doesn't much`);
       } 
   }
}

function confirmPassword(password,confirmPassword){
    return password === confirmPassword;
}

signUpBtn.addEventListener('click',handleSignUp);

userEmail.addEventListener('focus',(e)=>{
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
    clearInputs.clearValidInputs(e.target);
})


userPassword.addEventListener('focus',(e)=>{
    clearInputs. clearValidInputs(e.target);
})

userConfirmPassword.addEventListener('focus',(e)=>{
    clearInputs.clearValidInputs(e.target);
})
}