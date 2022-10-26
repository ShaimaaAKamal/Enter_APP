import {Validation} from './modules/Validation/validate.js' 
import {ClearInputs} from './modules/Validation/clearModule.js'

export function displayProfile(){
    const validate=new Validation();
    const clearInputs=new ClearInputs();
    const userName=document.querySelector('#userName');
    const userEmail=document.querySelector('#userEmail');
    const userType=document.getElementById('userType')
    const user=JSON.parse(localStorage.getItem('user'));
    const users=JSON.parse(localStorage.getItem('users'));
    const changeEmailBlock=document.querySelector('#changeEmail');
    const changeEmailLink=document.querySelector('#changeEmailLink');
    const userChangeEmailInput=document.getElementById('userChangeEmail');
    const closeIcon=document.querySelector('.closeIcon');
    const changeEmailBtn=document.querySelector('#changeEmailBtn');
    userName.innerHTML=(user.name)?user.name:'UserName';
    userEmail.innerHTML=(user.email)?user.email:'example@info.com';
    userType.innerHTML=(user.type)?user.type:'Regular';


    changeEmailLink.addEventListener('click',(e)=>{
        e.preventDefault();
        changeEmailBlock.classList.remove('d-none');
    })

    closeIcon.addEventListener('click',()=>{
        changeEmailBlock.classList.add('d-none');
    })
    changeEmailBtn.addEventListener('click',(e)=>{
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
    })
}

