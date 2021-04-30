// ================== person class===============================

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    return `${this.name} likes to eat`;
  }
  sleep() {
    return `${this.name} likes to sleep`;
  }
  walk() {
    return `${this.name} likes to walk`;
  }
}

// ============ player class ==================

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    return `${this.name} of age ${this.age} of gender ${this.gender} is playing ${this.sportsName}`;
  }
}

// ============teacher class =============================

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {
    return `${this.name} of age ${this.age} of gender ${this.gender} is teaching in ${this.instituteName}`;
  }
}

// ============================ artist class =======================

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    return `${this.name} of age ${this.age} of gender ${this.gender} is creating art of  ${this.kind}`;
  }
}

// =============== cricketer class ===============================

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
  playCricket() {
    return `${this.name} of age ${this.age} of gender ${this.gender} is playing cricket for team  ${this.teamName}`;
  }
}

//======================== test===============================

let person1 = new Person("person", 21, "male");

console.group("person");
console.log(person1);
console.log(person1.eat());
console.log(person1.sleep());
console.log(person1.walk());
console.groupEnd();

let player1 = new Player("player", 24, "female", "football");

console.group("player1");
console.log(player1);
console.log(player1.eat());
console.log(player1.sleep());
console.log(player1.walk());
console.log(player1.play());
console.groupEnd();

let teacher1 = new Teacher("teacher", 42, "male", "sinhgad");

console.group("teacher1");
console.log(teacher1);
console.log(teacher1.eat());
console.log(teacher1.sleep());
console.log(teacher1.walk());
console.log(teacher1.teach());
console.groupEnd();

let artist1 = new Artist("artist", 60, "female", "landscape");

console.group("artist1");
console.log(artist1);
console.log(artist1.eat());
console.log(artist1.sleep());
console.log(artist1.walk());
console.log(artist1.createArt());
console.groupEnd();

let cricketer1 = new Cricketer(
  "cricketer1",
  20,
  "male",
  "cricket",
  "Mumbai Indians"
);

console.group("cricketer1");
console.log(cricketer1);
console.log(cricketer1.eat());
console.log(cricketer1.sleep());
console.log(cricketer1.walk());
console.log(cricketer1.play());
console.log(cricketer1.playCricket());
console.groupEnd();
