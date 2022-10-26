import {Validation} from './modules/Validation/validate.js';
import {ClearInputs} from './modules/Validation/clearModule.js';

const validate=new Validation();
const clearInputs=new ClearInputs();
const existed=document.getElementById('existed');
const user=JSON.parse(localStorage.getItem('user'));
const users=JSON.parse(localStorage.getItem('users'));

export function displayProfile(){

    const userName=document.querySelector('#userName');
    const userEmail=document.querySelector('#userEmail');
    const userType=document.getElementById('userType')
   
    const changeEmailBlock=document.querySelector('#changeEmail');
    const changeEmailLink=document.querySelector('#changeEmailLink');
    const changePasswordLink=document.querySelector('#changePasswordLink');
    const changePasswordBlock=document.querySelector('#changePassword');
   
    const closeEmailIcon=document.querySelector('.closeEmailIcon');
    const closePasswordIcon=document.querySelector('.closePasswordIcon');
    const changeEmailBtn=document.querySelector('#changeEmailBtn');
    const changePasswordBtn=document.querySelector('#changePasswordBtn');

    userName.innerHTML=(user.name)?user.name:'UserName';
    userEmail.innerHTML=(user.email)?user.email:'example@info.com';
    userType.innerHTML=(user.type)?user.type:'Regular';


    changeEmailLink.addEventListener('click',(e)=>{
        e.preventDefault();
        changeEmailBlock.classList.remove('d-none');
    });

    changePasswordLink.addEventListener('click',(e)=>{
        e.preventDefault();
        changePasswordBlock.classList.remove('d-none');
    });

    closeEmailIcon.addEventListener('click',()=>{
        changeEmailBlock.classList.add('d-none');
    });

    closePasswordIcon.addEventListener('click',()=>{
        changePasswordBlock.classList.add('d-none');
    });

    changeEmailBtn.addEventListener('click',()=>{
        changeEmail(changeEmailBlock);
    });

    changePasswordBtn.addEventListener('click',()=>{
        changePassword(changePasswordBlock);
    });

}


function changeEmail(changeEmailBlock){
   const userChangeEmailInput=document.getElementById('userChangeEmail');
   const newEmail=userChangeEmailInput.value
         if(validate.validateEmail(newEmail)){
            clearInputs.clearValidInputs(userChangeEmailInput);
            updateUser('email',newEmail);
            userEmail.innerHTML=newEmail;
            changeEmailBlock.classList.add('d-none');
         }
         else{
            clearInputs.createInvalidMessage(newEmail,userChangeEmailInput,'E-mail is invalid') 
         }

         userChangeEmailInput.addEventListener('focus',(e)=>{
            clearInputs. clearValidInputs(e.target);
        });
}

function changePassword(changePasswordBlock){
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
    const oldPasswordInput=document.getElementById('oldPassword');
    const newPasswordInput=document.getElementById('newPassword');
    const newConfirmPasswordInput=document.getElementById('newConfirmPassword');
    const validOld=validate.validationMsg(validate.validatePassword(oldPassword.value),oldPasswordInput.value,oldPasswordInput,'password');
    const validNew=validate.validationMsg(validate.validatePassword(newPasswordInput.value),newPasswordInput.value,newPasswordInput,'password');
    const validConfirm=validate.validationMsg(validate.validatePassword(newConfirmPasswordInput.value),newConfirmPasswordInput.value,newConfirmPasswordInput,'password');

 if(validOld & validNew & validConfirm){
       if(user.password === oldPasswordInput.value){
         if(newPasswordInput.value ===newConfirmPasswordInput.value){
            updateUser('password',newPasswordInput.value);
            changePasswordBlock.classList.add('d-none');
         }
         else{
            clearInputs.createInvalidMessage(newPasswordInput.value,newPasswordInput,`Password doesn't much`);
            clearInputs.createInvalidMessage(newConfirmPasswordInput.value,newConfirmPasswordInput,`Password doesn't much`);
         }
       }
       else{
        existed.classList.remove('d-none');
       }

    }
   


    oldPasswordInput.addEventListener('focus',(e)=>{
        if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
        clearInputs. clearValidInputs(e.target);
    });
    newPasswordInput.addEventListener('focus',(e)=>{
        clearInputs. clearValidInputs(e.target);
    });
    newConfirmPasswordInput.addEventListener('focus',(e)=>{
        clearInputs. clearValidInputs(e.target);
    });
}

function updateUser(key,value){
    user[key]=value;
    users[user.id-1]=user;
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('users',JSON.stringify(users));
}