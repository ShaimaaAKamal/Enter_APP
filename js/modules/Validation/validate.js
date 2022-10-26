export class Validation{

   validateEmail(email){

        const regex=/^\w+([\.-]?\w+)*@(gmail|hotmail|yahoo)*(\.\w{2,3})+$/;
        return regex.test(email)
        }

   validateName(name){
         console.log(name);
         const regex=/^[a-zA-Z_ ]{10,30}$/;
         return regex.test(name)
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
            (!validEmail) ? createInvalidMessage(email,emailElement,'E-mail is invalid') : clearValidInputs(emailElement);
            (!validPassword) ? createInvalidMessage(password,passwordElement,`Password is invalid`) : clearValidInputs(passwordElement);
            if(Rest.length !== 0){
               (!this.validatePassword(Rest[0].value))? createInvalidMessage(Rest[0].value,Rest[0],`Password is invalid`) : clearValidInputs(Rest[0]);
               const name=Rest[1].value
                const validName=this.validateName(name);
                (!validName) ? createInvalidMessage(name,Rest[1],'Name is invalid') : clearValidInputs(Rest[1]);
            }
            let validStatus=(Rest.length !== 0)?validEmail&validPassword&this.validatePassword(Rest[0].value)&this.validateName(Rest[1].value)  : validEmail&validPassword;
            return validStatus;
        }
}


// formValidate(emailElement,passwordElement,clearValidInputs,createInvalidMessage,...Rest){
//    const email=emailElement.value;
//    const password=passwordElement.value
//    const validEmail=this.validateEmail(email);
//    const validPassword=this.validatePassword(password);
//    (!validEmail) ? createInvalidMessage(email,emailElement,'E-mail is invalid') : clearValidInputs(emailElement);
//    (!validPassword) ? createInvalidMessage(password,passwordElement,`Password is invalid`) : clearValidInputs(passwordElement);
//    if(Rest.length !== 0){
//       (!this.validatePassword(Rest[0].value))? createInvalidMessage(Rest[0].value,Rest[0],`Password is invalid`) : clearValidInputs(Rest[0]);
//    }
//    let validStatus=(Rest.length !== 0)?validEmail&validPassword&this.validatePassword(Rest[0].value) : validEmail&validPassword;
//    return validStatus;
// }