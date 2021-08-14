// 1. Strict
// 자바스크립트는 굉장히 유연한 언어
// 유연하다는 것은 개발자가 많은 실수를 할 수 있다는 것
// 'use strict'; 선언하게 되면 비상식적인 스크립팅을 하지 않을 수 있다.
// 예를 들어, 선언하지 않은 변수를 쓰려고 한다거나.
// add in ES5
'use strict';

// console.log('hello World!')

// 2. Variable, rw(read/write)
// let (added in ES6)
// let name = 'ellie';
// console.log(name);
// name = 'hello';
// console.log(name);

let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
}

// var (don't use this!)
// var hoisting (선언을 가장 위로 올려주는 것)
// has no block scope
{
  console.log(age);
  age = 4;
}
console.log(age);

// 3. Constant, r(read only)
// 값을 바꿀 수 없는 변수 (상수)
const daysInWeek = 7;

// Note!
// Mutable vs. Immutable
// favor immutable data type always.
// - security
// - thread safety
// - reduce human mistake
// Immutable data types: primitive types, frozen objects
// Mutable data types: all objects by default are mutable in JS

// 4. Variable types
// function도 데이터타입. 변수에 대입할수도 있다.
// 자바스크립트는 용량에 따른 변수명이 없다.
// 그냥 number 타입 하나.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

// bigInt
// 크롬과 파폭만 지원
const bigInt = 124134523546563456453534624626n;
console.log(bigInt);

// string
const char = 'c';
const brendan = 'brendan';
const helloBob = `hi ${brendan}`; // 리터럴

// boolean
// false : 0, null, undefined, NaN
//null
let nothing = null;
//undefined
let x;

// symbol - 식별자
// 같은 스트링이나 다른 변수임.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// 5. Dynamic typing
// 자바스크립트는 선언할 때 자동으로 타입을 지정해준다.
// 실행하면서 타입이 바뀌기도 한다.
let text = 'hello';
console.log(typeof text); //string
text = 1;
console.log(typeof text); //number

const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;
