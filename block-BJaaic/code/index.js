// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

function Animal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}
Animal.prototype = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

let animal1 = new Animal("pune", 4);
console.log(animal1);
// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

function Dog(name, color) {
  this.name = name;
  this.color = color;
}

Dog.prototype = {
  bark() {
    console.log(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.color = newColor;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
Object.setPrototypeOf(Dog, Animal);
let dog1 = new Dog("dolly", "black");
console.log(dog1);
// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
