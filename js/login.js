

//step-1 Add Event Lisner and click event
document.getElementById('button-submit').addEventListener('click',function(){
  //step -2 : get the email and pass
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value
   //step-3 get password
   const passwordFiled = document.getElementById('user-password');
   const userPass = passwordFiled.value
   //step - 4 : verify email and password
   if (userEmail ==='ripon@gmail.com' && userPass=== 'ripon') {
    window.location.href = ' bank.html';
   }
   else{
    alert('Toke Ami tejjo Pottro Korlam Tui pass Vule Gecos!!!!')
   }


})