'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 마지막 인덱스

// 3. Looping
// print all fruits
// a. for
console.clear();
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

// 4. Addtion, delethion, copy
// push : add an item to the end
fruits.push('딸기', '복숭아');

// unshift : 맨 앞에 요소 추가
// shift : 맨 앞에 요소 제거
// splitce : 요소 지우기 (1) -> 1부터 모두 지우기, (1,2) -> 1부터 2까지 지우기
// (1,2,'요소') -> 1부터 2까지 요소 덮어쓰기
