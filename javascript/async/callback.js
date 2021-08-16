'use strict';

// 자바스크립트는 동기적인 언어
// 호이스팅이 된 순서에 맞춰서 하나씩 동기적으로 실행된다.
// 호이스팅(hoisting) : var, function 선언들이 자동으로 제일 위로 올라간다 ---- 중요!!

console.log('1');
setTimeout(() => {
  console.log('2');
}, 1000);
// 나중에 부르는 함수를 '콜백함수'라고 한다.
console.log('3');

// 동기적 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// 비동기적 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// 콜백지옥
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
