/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  // add code here
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

var vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  greet: function () {
    console.log("hello");
  },
  // add code here
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  // add code here
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.greet = function () {
    console.log("hello");
  };
  return obj;
}

var sandra = personFromPersonStore("Sandra", 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// add code here
let sandra = {
  introduce: function () {
    console.log("Hi, my name is Sandra");
  },
};
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet = function () {
    console.log("hello");
  };
  // add code here
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  // add code here
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("hello");
  };
}

var mike = new personFromConstructor("Mike", 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here
function personFromConstructor(name, age) {
  // add code here
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("hello");
  };
  this.introduce = function () {
    console.log(`Hi, my name is ${this.name}`);
  };
}

var mike = new personFromConstructor("Mike", 30);

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor() {
    // add code here
  }
  greet() {
    console.log("hello");
  }

  // add code here
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// add code here
class DeveloperClass {
  constructor(name, age) {
    // add code here
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }

  // add code here
}

// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass("Thai", 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

// var userFunctionStore = {
//   sayType: function () {
//     console.log("I am a " + this.type);
//   },
// };

class userFactory {
  constructor(name, score) {
    this.type = "User";
    this.name = name;
    this.score = score;
  }
  sayType() {
    console.log("I am a " + this.type);
  }
}

// var adminFunctionStore /* Put code here */;

class adminFactory extends userFactory {
  constructor(name, score) {
    super(name, score);
    this.type = "admin";
  }
  sharePublicMessage() {
    console.log("Welcome Users");
  }
  sayType() {
    console.log("I am a " + this.type);
  }
  // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = new adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"
