// JSON
// JavaScript Objtect Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banna']);
console.log(json);

// 2. JSON to Object
const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  return key === 'name' ? 'ellie' : value;
});
