import { Validation } from "./Validation/validate.js";

const validation=new Validation();
const loginBtn=document.querySelector('#loginBtn');
const userEmail=document.querySelector('#userEmail');
const userPassword=document.querySelector('#userPassword');
const existed=document.getElementById('existed');
const users=(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];

// function handleSignUp(){ 
//     if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
//     const password=userRegisterPassword.value;
//     const email=userRegisterEmail.value;
//     const repeatPassword=userConfirmPassword.value;
//    if(validation.formValidate(email,password,clearValidInputs,createInvalidMessage,repeatPassword)){
//       if(confirmPassword(password,repeatPassword))
//        {
//          const existedUser= users.filter(user=>user.email === email);
//          if(existedUser.length === 0){
//             users.push({
//                 email,password
//             });
//             localStorage.setItem('users',JSON.stringify(users));
//             clearSignUpForm();
//          }
//          else existed.classList.remove('d-none');
//        }
//        else{
//         createInvalidMessage(password,userRegisterPassword,`Password doesn't much`);
//         createInvalidMessage(repeatPassword,userConfirmPassword,`Password doesn't much`);
//        } 
//    }
// }


function handleLogin(){
    if(!existed.classList.contains('d-none'))  existed.classList.add('d-none');
      const password=userPassword.value;
      const email=userEmail.value;
      if(validation.formValidate(email,password,clearValidInputs,createInvalidMessage)){
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

