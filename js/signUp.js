import { Validation } from "./modules/Validation/validate.js";
import { ClearInputs } from "./modules/Validation/clearModule.js";

const validation=new Validation();
const clearInputs=new ClearInputs();
const signUpBtn=document.querySelector('#signUpBtn');
const userEmail=document.querySelector('#userEmail');
const userPassword=document.querySelector('#userPassword');;
const userConfirmPassword=document.querySelector('#userConfirmPassword');
const existed=document.getElementById('existed');
const users=(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];

function handleSignUp(){ 
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
    const password=userPassword.value;
    const email=userEmail.value;
    const repeatPassword=userConfirmPassword.value;
   if(validation.formValidate(userEmail,userPassword,clearInputs.clearValidInputs,clearInputs.createInvalidMessage,userConfirmPassword)){
      if(confirmPassword(password,repeatPassword))
       {
         const existedUser= users.filter(user=>user.email === email);
         if(existedUser.length === 0){
            users.push({
                email,password
            });
            localStorage.setItem('users',JSON.stringify(users));
            clearInputs.clearSignUpForm();
         }
         else existed.classList.remove('d-none');
       }
       else{
        createInvalidMessage(password,userPassword,`Password doesn't much`);
        createInvalidMessage(repeatPassword,userConfirmPassword,`Password doesn't much`);
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