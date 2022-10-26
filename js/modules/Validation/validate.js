export class Validation{


  validateEmail(email){
    const regex=/^\w+([\.-]?\w+)*@(gmail|hotmail|yahoo)*(\.\w{2,3})+$/;
    return regex.test(email)
    }

   validateName(name){
         const regex=/^[a-zA-Z_ ]{10,30}$/;
         return regex.test(name)
         }
   
  validationMsg(bool,value,element,key,clearValidInputs,createInvalidMessage){
    (!bool) ? createInvalidMessage(value,element,`${key} is invalid`) : clearValidInputs(element);
  }

  validatePassword(password){
            const regex=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
            return regex.test(password)
          }
         
   formValidate(emailElement,passwordElement,clearValidInputs,createInvalidMessage,...Rest){
            const email=emailElement.value;
            const password=passwordElement.value
            const validEmail=this.validateEmail(email);
            const validPassword=this.validatePassword(password);
            this.validationMsg(validEmail,email,emailElement,'Email',clearValidInputs,createInvalidMessage);
            this.validationMsg(validPassword,password,passwordElement,'Password',clearValidInputs,createInvalidMessage);
            if(Rest.length !== 0){
              const validConfirmPassword=this.validatePassword(Rest[0].value);
              this.validationMsg(validConfirmPassword,Rest[0].value,Rest[0],'Password',clearValidInputs,createInvalidMessage);
               const name=Rest[1].value
               const validName=this.validateName(name);
               this.validationMsg(validName,Rest[1].value,Rest[1],'Name',clearValidInputs,createInvalidMessage);
            }
            let validStatus=(Rest.length !== 0)?validEmail&validPassword&this.validatePassword(Rest[0].value)&this.validateName(Rest[1].value)  : validEmail&validPassword;
            return validStatus;
        }
}

