export class Validation{

   validateEmail(email){

        const regex=/^\w+([\.-]?\w+)*@(gmail|hotmail|yahoo)*(\.\w{2,3})+$/;
        return regex.test(email)
        }


   validatePassword(password){

            const regex=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
            return regex.test(password)
          }
         
   formValidate(email,password,clearValidInputs,createInvalidMessage,...Rest){
      
            const validEmail=this.validateEmail(email);
            const validPassword=this.validatePassword(password);
            (!validEmail) ? createInvalidMessage(email,userRegisterEmail,'E-mail is invalid') : clearValidInputs(userRegisterEmail);
            (!validPassword) ? createInvalidMessage(password,userRegisterPassword,`Password is invalid`) : clearValidInputs(userRegisterPassword);
            (Rest && !this.validatePassword(Rest[0])) ? createInvalidMessage(Rest[0],userConfirmPassword,`Password is invalid`) : clearValidInputs(userConfirmPassword);
            let validStatus=(Rest)?validEmail&validPassword&this.validatePassword(Rest[0]) : validEmail&validPassword;
            return validStatus;
        }
}