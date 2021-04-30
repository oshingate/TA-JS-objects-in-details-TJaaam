## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: "John",
  sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  },
};

let user2 = {
  username: "Arya",
  sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  },
};
let user3 = {
  username: "Bran",
};

function MainUser() {
  this.username = "Tyrion";
  this.sayHello = function sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output  Hello John
console.log(user2.sayHello()); // output Hello Arya
console.log(user.sayHello.call(user2)); // output Hello Arya
console.log(user.sayHello.call(user2, "Hey")); // output Hey Arya
console.log(user.sayHello.apply(user2, ["Hey"])); // output Hey Arya
console.log(typeof user.sayHello.bind(user2)); // output "function" as bind returns function with this pointing to passed object
console.log(user.sayHello.bind(user2)()); // output "Hello Arya" as we are calling returned function by bind method.
console.log(userSayHello()); // output "Hello undefined"
console.log(typeof userSayHello.bind(user2)); // output "function" as bind returns function.
console.log(userSayHello.bind(user2)()); // output "Hello Arya"
console.log(user3.sayHello()); //   error "sayHello is not a function as it is not present in user3 object"
console.log(userSayHello.apply(user3)); // output "Hello Bran"
console.log(userSayHello.call(user3)); // output "Hello Bran"
console.log(typeof new MainUser()); // output "object"
console.log(typeof new MainUser()); // output "object"
console.log(new MainUser().sayHello()); // output "Hello Tyrian"
console.log(new MainUser().sayHello.call(user2)); // output "Hello Arya" because as sayHello function inside mainuser() is using call method and called user2 object thats why this.username will return Arya.
console.log(new MainUser().sayHello.call(user)); // output "Hello John" as sayHello is using call method to call object user with username John.
console.log(new MainUser().sayHello.apply(user, ["Welcome!"])); // output "Welcome! John" as sayHello is using apply method to call user object with parameter "welcome!" thats why.
```
