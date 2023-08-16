document.getElementById("go-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});



document.getElementById("btn-diposit").addEventListener("click", function () {
  const dipositFiled = document.getElementById("deposite-amount");
  const newDipositAmountString = dipositFiled.value;
  const newDipositAmount = parseFloat(newDipositAmountString)

  // step 2 get the previoues total amount
  const depositTotalElement = document.getElementById("deposit-total");
  const previouesDepositTotalString = depositTotalElement.innerText;
  const previouesDepositTotal = parseFloat(previouesDepositTotalString)

  const currentDipositTotal = previouesDepositTotal + newDipositAmount;
  depositTotalElement.innerText = currentDipositTotal;


//   step 5  balnce total get
    const balnceTotalElment = document.getElementById('balance-total');
    const previouesBalanceTotalString = balnceTotalElment.innerText;
    const previouesBlanceTotal = parseFloat(previouesBalanceTotalString);

    // step 6 current balnce total 
    const currentBalncetOTAL = previouesBlanceTotal + newDipositAmount;

    // Set the blance total 
    balnceTotalElment.innerText = currentBalncetOTAL;

  //step 4  clear deposit filed
  dipositFiled.value = "";
});


// Button Withdraw


document.getElementById('btn-Withdarw').addEventListener('click',function()
{
//  Step 01 : Get Button Acess and Add Event Handeler

  const WithdrawFiled = document.getElementById('withdraw-amount');
  const newWithdrawAmountString = WithdrawFiled.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
 
  // Step 2 : get Input filed data and make the string to number 
const withdrawTotalEelemnt = document.getElementById('withdraw-total');

const previouesWithdrawTotalString = withdrawTotalEelemnt.innerText;
const previouesNewWithdrawAmoutnt = parseFloat(previouesWithdrawTotalString);
const currentWithdrawTotal = newWithdrawAmount + previouesNewWithdrawAmoutnt;
withdrawTotalEelemnt.innerText = currentWithdrawTotal;

// step 3 : get the total balnce to - withdarw blance
const balnceTotalElment = document.getElementById('balance-total');
    const previouesBalanceTotalString = balnceTotalElment.innerText;
    const previouesBlanceTotal = parseFloat(previouesBalanceTotalString);

    // step 4 : added the withdraw blance to add total blance 
    const currentBalanceTotal = previouesBlanceTotal - newWithdrawAmount;
    
//  step 5 : added the total blance 
  balnceTotalElment.innerText = currentBalanceTotal;

  // step 6: clear the withdraw filed 
  WithdrawFiled.value = '';
})