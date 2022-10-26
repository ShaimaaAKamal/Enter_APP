
export function displayProfile(){

    const userName=document.querySelector('#userName');
    const userEmail=document.querySelector('#userEmail');
    const userType=document.getElementById('userType')
    const user=JSON.parse(localStorage.getItem('user'));
    userName.innerHTML=(user.name)?user.name:'UserName';
    userEmail.innerHTML=(user.email)?user.email:'example@info.com';
    userType.innerHTML=(user.type)?user.type:'Regular';



}

