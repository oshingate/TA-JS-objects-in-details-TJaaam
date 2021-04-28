// factory method

// function createPerson(name, id, noOfProjects = 0) {
//   let obj = {};
//   obj.name = name;
//   obj.id = id;
//   obj.projects = noOfProjects;
//   obj.getProjects = function () {
//     return obj.projects;
//   };
//   obj.changeName = function (newName) {
//     obj.name = newName;
//     return obj.name;
//   };
//   obj.incrementProject = function (no = 1) {
//     obj.projects += no;
//     return obj.projects;
//   };
//   obj.decrementProject = function (no = 1) {
//     obj.projects += no;
//     return obj.projects;
//   };
//   return obj;
// }

// let one = createPerson("onkar", 23, 5);
// let two = createPerson("abc", 23);

// ============ prototypal pattern========================

// function createPerson(name, id, noOfProjects = 0) {
//   let obj = Object.create(createPerson.prototype);
//   obj.name = name;
//   obj.id = id;
//   obj.projects = noOfProjects;

//   return obj;
// }

// createPerson.prototype = {
//   getProjects() {
//     return this.projects;
//   },
//   changeName(newName) {
//     this.name = newName;
//     return this.name;
//   },
//   incrementProject(no = 1) {
//     this.projects += no;
//     return this.projects;
//   },
//   decrementProject(no = 1) {
//     this.projects += no;
//     return this.projects;
//   },
// };

// let one = createPerson("onkar", 23, 5);
// let two = createPerson("abc", 23);

// ============== psuedotypical pattern =================

// function Person(name, id, noOfProjects = 0) {
//   this.name = name;
//   this.id = id;
//   this.projects = noOfProjects;
// }

// Person.prototype = {
//   getProjects() {
//     return this.projects;
//   },
//   changeName(newName) {
//     this.name = newName;
//     return this.name;
//   },
//   incrementProject(no = 1) {
//     this.projects += no;
//     return this.projects;
//   },
//   decrementProject(no = 1) {
//     this.projects += no;
//     return this.projects;
//   },
// };

// let one = new Person("onkar", 23, 5);
// let two = new Person("abc", 23);

// ================================class method =====================

class Person {
  constructor(name, id, noOfProjects = 0) {
    this.name = name;
    this.id = id;
    this.projects = noOfProjects;
  }
  getProjects() {
    return this.projects;
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  incrementProject(no = 1) {
    this.projects += no;
    return this.projects;
  }
  decrementProject(no = 1) {
    this.projects += no;
    return this.projects;
  }
}

let one = new Person("onkar", 23, 5);
let two = new Person("abc", 23);

// ============ test===========

console.group(one.name);
console.log(one.id);
console.log(one.projects);
console.log(one.changeName("onkarabc"));
console.log(one.incrementProject(5));
console.log(one.decrementProject());
console.log(one.getProjects());
console.groupEnd();

console.group(two.name);
console.log(two.id);
console.log(two.projects);
console.log(two.changeName("asdasd"));
console.log(two.incrementProject(5));
console.log(two.decrementProject());
console.log(two.getProjects());
console.groupEnd();
