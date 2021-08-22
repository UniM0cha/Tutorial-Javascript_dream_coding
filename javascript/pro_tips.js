// 삼항 연산자
// Bad code
function getResult(score) {
  let result;
  if (score > 5) {
    result = 'good';
  } else if (score <= 5) {
    result = 'bad';
  }
  return result;
}
// Good code
function getResult(score) {
  return score > 5 ? 'good' : 'bad';
}

// Nullish coalescing operator
// 널값과 undefined 구별하기
// Bad code
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display';
  }
  console.log(message);
}
// Good code
function printMessage(text) {
  const message = text ?? 'Nothing to display';
  console.log(message);
}

// 디폴드 값은 undefined 만 구별할 수 있다.
function printMessage(text = 'Nothing to display') {
  console.log(text);
}

// Object Destructuring
const person = {
  name: 'Julia',
  age: 20,
  phone: '01077777777',
};
// Bad code
function displayPerson(person) {
  displayName(person.name);
  displayPhone(person.phone);
  displayProfile(person.name, person.age);
}
// Good code
function displayPerson(person) {
  const { name, age, phone } = person;
  displayName(name);
  displayPhone(phone);
  displayProfile(name, age);
}
// Better code
function displayPerson({ name, age, phone }) {
  displayName(name);
  displayPhone(phone);
  displayProfile(name, age);
}

// Spread Syntax - Object
// 두 객체를 합치기
const item = { type: 'shirt', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// Bad code
item['price'] = detail.price;
// Bad code
const newObject = {
  type: item.type,
  size: item.size,
  price: detail.price,
  mad: detail.made,
  gender: detail.gender,
};

// Good code
const shirt0 = Object.assign(item, detail);
// Better code
const shirt1 = { ...item, ...detail };
// 멤버 업데이트 가능
const shirt2 = { ...item, ...detail, price: 40 };

// Spread Syntax - Array
let fruits = ['수박', '오렌지', '바나나'];

// fruits.push('딸기');
fruits = [...fruits, '딸기'];
// fruits.unshift('딸기');
fruits = ['딸기', ...fruits];

const fruits2 = ['멜론', '복숭아', '파인애플'];
// let combined = fruits.concat(fruits2);
let combined = [...fruits, ...fruits2];

// Opthinal Chaining
const bob = {
  name: 'Julia',
  age: 20,
};
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'SoftwareEngineer',
  },
};

// Bad code
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// Good code
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// Better code
function displayJobTitle(person) {
  const title = person.job?.title ?? 'No Job Yet!';
  console.log(title);
}

// Looping
const items = [1, 2, 3, 4, 5, 6];
const evens = getAllEvens(items);

// Bad Code
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

// Good code
function getAllEvens(items) {
  return items.filter((num) => num % 2 === 0);
}

console.log("hello")