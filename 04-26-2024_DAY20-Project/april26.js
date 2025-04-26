/**
 * * JSON DATA TYPES
 * & String
 * & Number
 * & Boolean
 * & null
 * & Array
 * & Object
 */

// JSON.parse();
// JSON.stringify();

const userBirthYear = [];

const userAges = new Array();
// console.log(userAges);

const btn = document.querySelector('button');
const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');
const alt = document.querySelector('.alt');

// const revealInfo = () => {
//   const myRequest = new XMLHttpRequest();

//   myRequest.open('GET', 'https://api.wheretheiss.at/v1/satellites/25544');
//   myRequest.onload = function () {
//     console.log(myRequest.responseText);
//     let myData = myRequest.responseText;
//     // console.log(myData.id)
//     let myDataJS = JSON.parse(myData);
//     console.log(myDataJS);
//     console.log(
//       myDataJS.id,
//       myDataJS.latitude,
//       myDataJS.longitude,
//       myDataJS.altitude
//     );

//     const { latitude, longitude, altitude } = myDataJS;

//     lat.textContent = String(latitude);
//     lon.textContent = String(longitude);
//     alt.textContent = String(altitude);
//   };

//   myRequest.send();
// };

// btn.addEventListener('click', revealInfo);

urlAPI = 'https://api.wheretheiss.at/v1/satellites/25544';

const grabMyISS = async () => {
  const response = await fetch(urlAPI);
  console.log(response);

  const info = await response.json();
  console.log(info);

  const { latitude, longitude, altitude } = info;

  lat.textContent = String(latitude);
  lon.textContent = String(longitude);
  alt.textContent = String(altitude);
};

btn.addEventListener('click', grabMyISS);
