function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
}

function printMessage() {
  let message = 'hello';
  function printAnother() {
    let message2 = 'hello';
    console.log(message);
    console.log(message2);
  }
}

// Early return, Early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
// 함수가 선언되기 이전에 호출해도 호출이 가능하다 (호이스팅)

// 콜백 (Callback)
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log('Yes!');
};
const printYes = function () {
  console.log('No!');
  print();
  // 함수 안에서 자신의 함수를 호출할 때
};

// 화살표 함수 (Arrow Function)
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const add = function (a, b) {
  return a + b;
};
// 같다

// IIFE : 즉시호출 함수
(function hello() {
  console.log('IIFE');
})();

//Quiz
const calculate = (command, a, b) => {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
};
