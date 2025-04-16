console.log('Hello John Doe');

const prod1 = 'Kona Coffee';
console.log(prod1);

const prod2 = 'Lemon Tea';
console.log(prod2);

let prod3 = 'ICE CREAM';
console.log(prod3);

prod3 = 'cookie';
console.log(prod3);

// prod1='fruits';

let sum = 2 + 2;
console.log(sum);

let totalSum;

console.log(typeof totalSum);
console.log(typeof sum);
console.log(typeof prod1, typeof prod2, typeof prod3);
console.log((2 + 2) * 4 + 'HELLO');

console.log(3 > 2 + 4 - (10 * 3) / 100);
console.log(4 - (10 * 3) / 100 - 3 > 2);
console.log(4 - 'John');
console.log('John is' + (2025 - 1990) + 'years old');

sum = sum + 4;
sum += 4;
// sum/=2;
sum++;
// sum+=1
sum++;
sum--;
// sum-=1
sum -= 2;

// if(3>2){
//  }
// else if (){
//  }
// else{
// }

// const userBirthYear=prompt('Enter your birth year:');
const userBirthYear = 10;
console.log('User Entered:', Number(userBirthYear));
const currentYear = 2025;
const userAge = currentYear - userBirthYear;

if (!Number(userBirthYear)) {
  alert('Please enter number only!');
} else {
  if (userAge >= 16) {
    console.log('Congrats! You can apply for driver license!');
  } else {
    console.log('Sorry! You can NOT apply  =(');
  }
}
// if(){}

// if(){}
// else{}
userAge >= 16 ? console.log('Congrats!') : console.log('Sorry!');

const birthYear = 1970;
const Age = currentYear - birthYear;

// STATEMENT
if (Age >= 16 && Age < 26) {
  console.log(
    'Congrats! You can apply for driver license! Get more quotes of insurance!'
  );
} else if (Age >= 26) {
  console.log('Insurance price for your case should fall in ...!');
} else if (Age < 16 && Age > 12) {
  // console.log('Sorry! You can NOT apply. but just wait for'+(16-Age) +'years!');
  console.log(
    `Sorry! you can Not apply, but just watir for ${16 - Age} years!`
  );
} else {
  console.log('Sorry! You can NOT apply =(');
}

// template literals
console.log(`Sorry! you can Not apply, but just watir for ${16 - Age} years!`);

// &&  ||  !

// A: 25>16 true
// B: 10>11  false

// A&&B||B&&A||!B

// F||F||T
// T

function checkAge(pBirthYear) {
  const Age = currentYear - pBirthYear;
  if (Age >= 16 && Age < 26) {
    console.log(
      'Congrats! You can apply for driver license! Get more quotes of insurance!'
    );
  } else if (Age >= 26) {
    console.log('Insurance price for your case should fall in ...!');
  } else if (Age < 16 && Age > 12) {
    // console.log('Sorry! You can NOT apply. but just wait for'+(16-Age) +'years!');
    console.log(
      `Sorry! you can Not apply, but just watir for ${16 - Age} years!`
    );
  } else {
    console.log('Sorry! You can NOT apply =(');
  }
}

checkAge(1994);
function checkAgePro(pBirthYear) {
  const Age = currentYear - pBirthYear;
  let msg;
  if (Age >= 16 && Age < 26) {
    msg =
      'Congrats! You can apply for driver license! Get more quotes of insurance!';
  } else if (Age >= 26) {
    msg = 'Insurance price for your case should fall in ...!';
  } else if (Age < 16 && Age > 12) {
    // console.log('Sorry! You can NOT apply. but just wait for'+(16-Age) +'years!');
    msg = `Sorry! you can Not apply, but just watir for ${16 - Age} years!`;
  } else {
    msg = 'Sorry! You can NOT apply =(';
  }
  return msg;
}

console.log(checkAgePro(1930));

/* question: if bill is <$30 or >$200 tip rate: 15%
otherwise  tip rate:  18% */
// create a function that return correct tip based on any bill amout passed into the function

function calTipAndTotal(bill) {
  let tip;
  let total;
  tip = bill < 200 && bill > 30 ? bill * 0.15 : bill * 0.18;
  // if (bill<200&&bill>30){
  //          tip=bill*0.15;
  // }
  // else {tip=bill*0.18}
  total = bill + tip;
  const msg = `Your tip is $${tip}, and your total bill is $${total} `;
  return msg;
}
console.log(calTipAndTotal(10));
console.log(calTipAndTotal(100));
console.log(calTipAndTotal(1000));
console.log(calTipAndTotal(300));

// Arrow function
const calTipPro = () => console.log("I'm a function output");
calTipPro();

const calTipAndTotalArrow = (pBill) => {
  let tip;
  let total;
  tip = pBill < 200 && pBill > 30 ? pBill * 0.15 : pBill * 0.18;
  // if (bill<200&&bill>30){
  //          tip=bill*0.15;
  // }
  // else {tip=bill*0.18}
  total = pBill + tip;
  const msg = `Your tip is $${tip}, and your total bill is $${total} `;
  return msg;
};

console.log(calTipAndTotalArrow(2000));
// 1. create a function than call another function;
// 2. what there 4 ppl, or more;   eg
function calTipFor4(p1, p2, p3, p4) {}

// DOM
// object
const stu1 = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1990,
  address: '101 New York, 10001',
  //   score:[110,99,100,95]
};

console.log(stu1.firstName);
console.log(stu1);
document.querySelector('h1').textContent = 'GUESS A NUMBER GAME';

document.querySelector('body').addEventListener('click', function () {});

let score = 10;
let histroyHighScore;
const currentScore = document.querySelector('.currentscore');
const historyHigh = document.querySelector('.historyhigh');
const input = document.querySelector('input');
const btn = document.querySelector('.check');
const msg = document.querySelector('p');
// let randomNum=Math.random()
// console.log(randomNum);

// console.log(input,btn, msg)
// falsy values: NaN, '', 0, null, undefined
btn.addEventListener('click', function () {
  if (!Number(input.value)) {
    msg.textContent = 'Enter number 1-100 ONLY!';
  } else if (Number(input.value) === randomNum) {
    msg.textContent = 'Congrats! You win!';
  } else if (Number(input.value) > randomNum) {
    msg.textContent = 'Too large';
    score--;
    currentScore.textContent = String(score);
  }
});

// const scoreList=['John','Harry','Peter','Lucas']
// scoreList.push('Pizza');
// const scores=[];
