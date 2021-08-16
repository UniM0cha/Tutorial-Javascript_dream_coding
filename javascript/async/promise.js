'use strict';

// 프로미스는 비동기적 처리에서 콜백함수 대신에 유용하게 쓸 수 있는 오브젝트
// 1. state(상태) : pending -> fulfilled or rejected
// 2. producer vs consumer (제공자 vs 소비자)

// 1. Producer
// executer : 실행할 함수
// resolve : 정상적으로 실행 되었을 때
// reject : 오류가 생겼을 때
const promise = new Promise((resolve, reject) => {
  // 헤비한, 오래 걸리는 작업을 여기에 하는 것
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');

    // 에러 오브젝트에는 무슨 에러가 발생했는지 명시해 줄 것
    // Uncaught : catch를 통해 잡지 않은 오류가 났을 때 나오는 것 = catch를 통해 잡아주어야 한다.
    reject(new Error('no network'));
  }, 2000);
});
// 쓰레드를 만드는 것이라고 이해해도 될까?

// 프로미스가 만들어졌을 때 executer라는 함수가 바로 실행된다는 것을 알 수 있음.
// 작업이 잘 수행되었다면 resolve 콜백함수를 호출하면 된다.

// 2. Consumer : then, catch, finally
promise
  // then : reslove를 통해 실행
  // value에는 resolve 에서 전달해준 인자가 들어온다.
  .then((value) => {
    console.log(value);
  })
  // catch : rejcet를 통해 실행
  .catch((error) => {
    console.log(error);
  })
  // finally : 아무때나 실행
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, rejcet) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
// then에는 값을 전달할 수도 있고 Promise를 전달할 수도 있다.

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 알`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 요리`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// 콜백함수를 전달할 때 받아오는 value를 다음 함수에 바로 호출하는 경우에는 생략 가능
getHen() //
  .then(getEgg)
  .catch((error) => {
    return '빵';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
