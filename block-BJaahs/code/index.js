// que1 = {
//   title: "5+2=?",
//   options: [1, 3, 5, 7],
//   correctAnswerIndex: 3,
//   getCorrectAnswer: function () {
//     return que1.correctAnswerIndex;
//   },
//   isAnswerCorrect: function (i) {
//     if (i === que1.correctAnswerIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };
// que2 = {
//   title: "2+2=?",
//   options: [1, 4, 5, 7],
//   correctAnswerIndex: 1,
//   isAnswerCorrect: function (i) {
//     if (i - 1 === que2.correctAnswerIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   getCorrectAnswer: function () {
//     return que2.correctAnswerIndex + 1;
//   },
// };

// console.log(que1.title);
// console.log(que1.options);
// console.log(que1.isAnswerCorrect(3));
// console.log(que1.getCorrectAnswer());

function createObj(title, options, correctAnswerIndex) {
  let que = {};
  que.title = title;
  que.options = options;
  que.correctAnswerIndex = correctAnswerIndex;
  que.isAnswerCorrect = function (i) {
    if (i - 1 === this.correctAnswerIndex) {
      return true;
    } else {
      return false;
    }
  };
  que.getCorrectAnswer = function () {
    return this.correctAnswerIndex + 1;
  };

  return que;
}

let que1 = createObj("5+1=?", [2, 5, 6, 8], 2);
let que2 = createObj("1+1=?", [2, 4, 6, 1], 0);

console.group("First obj");
console.log(que1);
console.log(que1.title);
console.log(que1.options);
console.log(que1.isAnswerCorrect(2));
console.log(que1.getCorrectAnswer());
console.groupEnd();

console.group("Second obj");
console.log(que2);
console.log(que2.title);
console.log(que2.options);
console.log(que2.isAnswerCorrect(2));
console.log(que2.getCorrectAnswer());
console.groupEnd();
