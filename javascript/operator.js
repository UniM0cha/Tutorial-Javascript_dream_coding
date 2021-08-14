// Logical operator
// 앞에서 결과가 나와버리면 뒤까지 실행하지 않음
// 따라서 복잡한 연산이 필요한 함수일 수록 뒤에다 배치할 것

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// loose equality
console.log(stringFive == numberFive); //true

// strict equality
console.log(stringFive === numberFive); //false

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

// equality
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
