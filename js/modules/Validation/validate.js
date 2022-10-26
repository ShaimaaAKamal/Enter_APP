import { ClearInputs } from "./clearModule.js";
const clearInputs=new ClearInputs();
export class Validation{


  validateEmail(email){
    const regex=/^\w+([\.-]?\w+)*@(gmail|hotmail|yahoo)*(\.\w{2,3})+$/;
    return regex.test(email)
    }

   validateName(name){
         const regex=/^[a-zA-Z_ ]{6,30}$/;
         return regex.test(name)
         }
   
  validationMsg(bool,value,element,key){
    if(!bool){
      clearInputs.createInvalidMessage(value,element,`${key} is invalid`);
      return false;
    }
    else{
      clearInputs.clearValidInputs(element);
      return true;
    }
    // (!bool) ? clearInputs.createInvalidMessage(value,element,`${key} is invalid`) : clearInputs.clearValidInputs(element);
  }

  validatePassword(password){
            const regex=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
            return regex.test(password)
          }
         
  formValidate(emailElement,passwordElement,...Rest){
            const email=emailElement.value;
            const password=passwordElement.value
            const validEmail=this.validateEmail(email);
            const validPassword=this.validatePassword(password);
            this.validationMsg(validEmail,email,emailElement,'Email');
            this.validationMsg(validPassword,password,passwordElement,'Password');
            if(Rest.length !== 0){
              const validConfirmPassword=this.validatePassword(Rest[0].value);
              this.validationMsg(validConfirmPassword,Rest[0].value,Rest[0],'Password');
              const name=Rest[1].value
              const validName=this.validateName(name);
              this.validationMsg(validName,Rest[1].value,Rest[1],'Name');
            }
            let validStatus=(Rest.length !== 0)?validEmail&validPassword&this.validatePassword(Rest[0].value)&this.validateName(Rest[1].value)  : validEmail&validPassword;
            return validStatus;
        }
}

