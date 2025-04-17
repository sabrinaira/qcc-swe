// bill // 30,45,50,60,34,43
// tip, total amount

const bill = [];
for (let i = 0; i < 6; i++) {
  bill.push(prompt(`Enter bill for guest # ${i + 1}`));
}

console.log(bill);

const tip = [];
const totalBill = [];
// entry controled loop

// Practice, apply loop, function, caculate everyone's tip all at once, then do the same thing for total bill.
//   use  15% tip rate
for (let i = 0; i < bill.length; i++) {
  console.log('person #', i + 1, `the bill of person # ${i + 1} is ${bill[i]}`);
}
for (let i in bill) {
  // console.log(i);
  console.log(
    'person #',
    Number(i) + 1,
    `the bill of person # ${i + 1} is ${bill[i]}`
  );
}
// coffee price: $8
let balance = 100;
let i = 1;

while (balance > 8) {
  console.log(
    `You just ordered a coffee for ${i} times this month, and your new balance is $${
      balance - 8
    }`
  );
  balance -= 8;
  i++;
}

function calTip1(pBill) {
  let tipVal;
  tipVal = pBill * 0.15;
  return tipVal;
}

for (let i in bill) {
  i = Number(i);
  tip.push(calTip1(bill[i]));
  totalBill.push(Number(bill[i]) + Number(tip[i]));
}
console.log(tip);
console.log(totalBill);

//FINISH CALCULATE TOTAL BILL FOR EVERYONE

const catTip2 = (pBill) => {
  let tip;
  tip = pBill * 0.15;
  return tip;
};

const calTip3 = function (pBill) {
  let tip;
  tip = pBill * 0.15;
  return tip;
};

const billNew = [];
const TipNew = [];
const TotalNew = [];

// function calTip1(pBill){
//     let tipVal;
//     tipVal=pBill*0.15;
//     return tipVal;
// }

function calTipAndToalPro() {
  const guestNum = Number(prompt('----How many guests?'));
  for (let i = 0; i < guestNum; i++) {
    billNew.push(Number(prompt(`-----Enter bill for guest # ${i + 1}`)));
  }
  console.log(billNew);

  for (let i in billNew) {
    i = Number(i);
    TipNew.push(calTip1(billNew[i]));
    TotalNew.push(Number(billNew[i]) + Number(TipNew[i]));

    //
    console.log('The tip of all guests:', TipNew);
    console.log('The total bill of all guests:', TotalNew);
  }
}

calTipAndToalPro();
