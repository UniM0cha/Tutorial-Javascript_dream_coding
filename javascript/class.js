'use strict';
// JS의 객체는 모양만 객체일 뿐.
// 1. 클래스
class Person {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}: hello!`);
  }
  //getter, setter
  get age() {
    return this._age;
  }
  set age(value) {
    if (value < 0) {
      throw Error('age can not be negative');
    }
    this._age = value;
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// public, private
class Experiment {
  publicField = 2;
  #privateField = 0;
}

// Static
// 들어오는 데이터에 상관없이 사용되는 것들에 적용
class Article {
  static publisher = 'Dream Coding';
  static printPublisher() {
    console.log('hello');
  }
}
Article.printPublisher();

// 상속, 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log('draw');
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // 부모것도 유지 먼저 가져옴
    super.draw();
    console.log('세모');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
