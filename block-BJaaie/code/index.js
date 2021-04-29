// psudoclassical method

// function CreateAnimal(location, numberOfLegs) {
//   this.location = location;
//   this.numberOfLegs = numberOfLegs;
// }
// CreateAnimal.prototype = {
//   eat: function () {
//     return `I live in ${this.location} and I can eat`;
//   },
//   changeLocation: function (newLocation) {
//     this.location = newLocation;
//   },
//   summary: function () {
//     return `I live in ${this.location} and I have ${this.numberOfLegs}`;
//   },
// };

// let animal1 = new CreateAnimal("pune", 4);
// console.log(animal1);
// // dog
// function CreateDog(location, numberOfLegs, name, color) {
//   CreateAnimal.call(this, location, numberOfLegs);
//   this.name = name;
//   this.color = color;
// }

// CreateDog.prototype = {
//   bark: function () {
//     return `I am ${this.name} and I can bark 🐶`;
//   },
//   changeName: function (newName) {
//     this.name = newName;
//   },
//   changeColor: function (newColor) {
//     this.color = newColor;
//   },
//   summary: function () {
//     return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
//   },
// };
// Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
// let dog1 = new CreateDog("pune", 4, "dolly", "blue");
// console.log(dog1);

// // cat

// function CreateCat(location, numberOfLegs, name, colorOfEyes) {
//   CreateAnimal.call(this, location, numberOfLegs);
//   this.name = name;
//   this.colorOfEyes = colorOfEyes;
// }

// CreateCat.prototype = {
//   meow: function () {
//     return `I am ${this.name} and I can do mewo meow 😹`;
//   },
//   changeName: function (newName) {
//     this.name = newName;
//   },
//   changeColorOfEyes: function (newColor) {
//     this.changeColorOfEyes = newColor;
//   },
//   summary: function () {
//     return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
//   },
// };
// Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);
// let cat1 = new CreateCat("pune", 4, "dolly", "blue");
// console.log(cat1);

// ================================class pattern=============================

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    return `I live in ${this.location} and I can eat`;
  }
  changeLocation(newLocation) {
    this.location = newLocation;
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

let animal1 = new Animal("pune", 4);
console.log(animal1);
// dog
class CreateDog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    return `I am ${this.name} and I can bark 🐶`;
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

let dog1 = new CreateDog("pune", 4, "dolly", "blue");
console.log(dog1);

// cat

class Cat extends Animal {
  constructor(location, numberOfLegs, name, colorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    return `I am ${this.name} and I can do mewo meow 😹`;
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColorOfEyes(newColor) {
    this.changeColorOfEyes = newColor;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}

let cat1 = new Cat("pune", 4, "dolly", "blue");
console.log(cat1);
