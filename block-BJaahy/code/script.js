// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

// class Square {
//   constructor(side) {
//     this.height = side;
//     this.width = side;
//   }
// }

// - Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

// class Square {
//   constructor(side) {
//     this.height = side;
//     this.width = side;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
// }

// - Create a method inside the class named `calcArea` that will return the area of the square.

// class Square {
//   constructor(side) {
//     this.height = side;
//     this.width = side;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
//   calcArea() {
//     return this.width * this.height;
//   }
// }

// - Create a `area` getter method using which we can get the area of the square.

// class Square {
//   constructor(side) {
//     this.height = side;
//     this.width = side;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
//   calcArea() {
//     return this.width * this.height;
//   }
//   get area() {
//     return this.calcArea();
//   }
// }

// - Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

// class Square {
//   constructor(side) {
//     this.height = side;
//     this.width = side;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
//   calcArea() {
//     return this.width * this.height;
//   }
//   get area() {
//     return this.calcArea();
//   }
//   set area(givenArea) {
//     if (givenArea == this.area) {
//       this.height = givenArea / 2;
//       this.width = givenArea / 2;
//     } else {
//       alert("Not a valid input");
//     }
//   }
// }

// - Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property.
//  If the area of both square is same it will return `true` or `false`.

// class Square {
//   constructor(side) {
//     this.height = side;
//     this.width = side;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
//   calcArea() {
//     return this.width * this.height;
//   }
//   get area() {
//     return this.calcArea();
//   }
//   set area(givenArea) {
//     if (givenArea == this.area) {
//       this.height = givenArea / 2;
//       this.width = givenArea / 2;
//     } else {
//       alert("Not a valid input");
//     }
//   }
//   static isEqual(obj1, obj2) {
//     if (obj1.area === obj2.area) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// - Create another property named `numberOfTimes` that will hold the value of number of times the area
// property is accessed from the object. The values will initialize to `0`. The area property can't be
// accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`

class Square {
  constructor(side) {
    this.height = side;
    this.width = side;
    this.numberOfTimes = 0;
  }
  description() {
    alert(`The square is ${this.width} x ${this.height}`);
  }
  calcArea() {
    return this.width * this.height;
  }
  get area() {
    if (this.numberOfTimes <= 4) {
      this.numberOfTimes += 1;
      return this.calcArea();
    } else {
      alert(`Upper Limit Reached`);
    }
  }
  set area(givenArea) {
    if (givenArea == this.area) {
      this.height = givenArea / 2;
      this.width = givenArea / 2;
    } else {
      alert("Not a valid input");
    }
  }
  static isEqual(obj1, obj2) {
    if (obj1.area === obj2.area) {
      return true;
    } else {
      return false;
    }
  }
}

// - Create two instance of the `Square` class

let one = new Square(10);
let two = new Square(20);

// - Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

console.log(one.area);
console.log(one);

// - Check the `isEqual` method and pass the two instance you created above.

console.log(Square.isEqual(one, two));

// ## User Class

// - Create a `User` class that accepts `firstName` and `lastName` property

// class User {
//   constructor(firstName, lastName) {
//     this.fName = firstName;
//     this.lName = lastName;
//   }
// }

// - Create a getter method named `fullName` that will return the full name of the person.

// class User {
//     constructor(firstName, lastName) {
//       this.fName = firstName;
//       this.lName = lastName;
//     }
//     get fullName(){
//         return `${this.fName} ${this.lName}`
//     }
//   }

// - Create a `fullName` setter method that will accept full name parameter of the person.
// It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark`
// it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition
// if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

// class User {
//   constructor(firstName, lastName) {
//     this.fName = firstName;
//     this.lName = lastName;
//   }
//   get fullName() {
//     return `${this.fName} ${this.lName}`;
//   }
//   set fullName(givenName) {
//     if (givenName.length > 5) {
//       let arr = givenName.split(" ");
//       this.fName = arr[0];
//       this.lastName = arr[1];
//     } else {
//       alert(`Full name should be more than 5 characters`);
//     }
//   }
// }

// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on
// if the name of the user contains the text that passed by user.

class User {
  constructor(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
  }
  get fullName() {
    return `${this.fName} ${this.lName}`;
  }
  set fullName(givenName) {
    if (givenName.length > 5) {
      let arr = givenName.split(" ");
      this.fName = arr[0];
      this.lName = arr[1];
    } else {
      alert(`Full name should be more than 5 characters`);
    }
  }
  nameContains(str) {
    let name = this.fullName;
    if (name.includes(str)) {
      return true;
    } else {
      return false;
    }
  }
}

// - Create two instance of the `User` class

let user1 = new User("onkar", "shingate");
let user2 = new User("tushar", "shingate");

// - Check by using the `fullName` setter method with name bigger than 5 characters.

user1.fullName = "admin one";

// - Check by using the `fullName` setter method with name less than 5 characters.

user2.fullName = "ab c";

// - Check the `fullName` using getter

console.log(user1.fullName);
console.log(user2.fullName);

// - Check the `nameContains` method
console.log(user1.nameContains("adm"));
