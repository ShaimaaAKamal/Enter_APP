import {Validation} from './modules/Validation/validate.js';
import {ClearInputs} from './modules/Validation/clearModule.js';

const validate=new Validation();
const clearInputs=new ClearInputs();
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
            user.email=newEmail;
            users[user.id-1]=user;
            userEmail.innerHTML=newEmail;
            localStorage.setItem('user',JSON.stringify(user));
            localStorage.setItem('users',JSON.stringify(users));
            changeEmailBlock.classList.add('d-none');
         }
         else{
            clearInputs.createInvalidMessage(newEmail,userChangeEmailInput,'E-mail is invalid') 
         }
}

function changePassword(changePasswordBlock){
    const oldPassword=document.getElementById('oldPassword').value;
    const newPassword=document.getElementById('newPassword').value;
    const newConfirmPassword=document.getElementById('newConfirmPassword').value;
}