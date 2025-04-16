// alert('test');

//bill
// tip total amount

const bill = [30, 45, 50, 60, 34, 43];
let totalBill = 0;

//  total bill
for (let i = 0; i < bill.length; i++) {
  totalBill += bill[i];
}
console.log(totalBill);

// coffee price: $8
let balance = 100;
let i = 1;

while (balance > 8) {
  console.log(
    `You just ordered a coffee for ${i} times this month, and your new balance is $${
      balance - 8
    }`
  );
  i++;
}

function calTip1(pBill) {
  let tip;
  tip = pBill * 0.15;
  return tip;
}

for (let i in bill) {
  i = Number(i);
  calTip1(bill[0]);
}

const newBill = [];
const newTip = [];
const newTotal = [];

function calTipAndTotalPro(pInput) {
  const guestNum = Number(prompt('How many guests?'));
  for (let i = 0; i < guestNum; i++) {
    newBill.push(prompt(`Enter bill for guest # ${i + 1}`));
  }
}
