'use strict';

// async & await
// 프로미스를 더욱 깔끔하게 만들어주는 친구!

// 1. async
function fetchUser() {
  // do network request in 10 secs
  return 'ellie';
}

let user = fetchUser();
// 사용자 데이터를 받아올동안 자바스크립트는 아무것도 하지 않음....
console.log(user);

// 프로미스로 해결하는 방법
function fetchUserPromise() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs
    // 꼭 리졸브를 통해서 마무리를 해주자.
    resolve('ellie');
  });
}

user = fetchUserPromise();
console.log(user);

// async로 해결하는 방법
async function fetchUserAsync() {
  // do network request in 10 secs
  return 'ellie';
}

user = fetchUserAsync();
console.log(user);
// 함수 앞에 async를 붙히면 알아서 프로미스로 바뀜

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  // 딜레이가 끝날 때까지 기다려줌 (비동기 안에서 동기적으로)
  await delay(3000);
  return '사과';
}

async function getBanana() {
  await delay(3000);
  return '바나나';
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickFruits().then(console.log);

async function pickFruits() {
  const applePromise = getApple();
  const bananPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
// 에러처리는 try + catch 문으로 해결한다.

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana]);
}
pickOnlyOne().then(console.log);
