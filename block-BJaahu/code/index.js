// ======================== factory method===========================================

// function createQue(title, options, correctAnswerIndex) {
//   let obj = {};
//   obj.title = title;
//   obj.options = options;
//   obj.correctAnswerIndex = correctAnswerIndex;
//   obj.isAnswerCorrect = function (i) {
//     if (i == obj.correctAnswerIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   obj.getCorrectAnswer = function () {
//     return obj.correctAnswerIndex;
//   };
//   return obj;
// }

// let firstQuestion = createQue(
//   "Where is the capital of Jordan",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );
// let secondQuestion = createQue(
//   "Where is the capital of Jamaica",
//   ["Tashkent", "Amaan", "Kingston", "Nairobi"],
//   2
// );

// ==================  protypal method=======================

// function createQue(title, options, correctAnswerIndex) {
//   let obj = Object.create(createQue.prototype);
//   obj.title = title;
//   obj.options = options;
//   obj.correctAnswerIndex = correctAnswerIndex;

//   return obj;
// }

// createQue.prototype = {
//   isAnswerCorrect(i) {
//     if (i == this.correctAnswerIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   getCorrectAnswer() {
//     return this.correctAnswerIndex;
//   },
// };

// let firstQuestion = createQue(
//   "Where is the capital of Jordan",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );
// let secondQuestion = createQue(
//   "Where is the capital of Jamaica",
//   ["Tashkent", "Amaan", "Kingston", "Nairobi"],
//   2
// );

// ============ Pseudoclassical method===============

// function Question(title, options, correctAnswerIndex) {
//   this.title = title;
//   this.options = options;
//   this.correctAnswerIndex = correctAnswerIndex;
// }

// Question.prototype = {
//   isAnswerCorrect(i) {
//     if (i == this.correctAnswerIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   getCorrectAnswer() {
//     return this.correctAnswerIndex;
//   },
// };

// let firstQuestion = new Question(
//   "Where is the capital of Jordan",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );
// let secondQuestion = new Question(
//   "Where is the capital of Jamaica",
//   ["Tashkent", "Amaan", "Kingston", "Nairobi"],
//   2
// );

// ===================== class method===================

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(i) {
    if (i == this.correctAnswerIndex) {
      return true;
    } else {
      return false;
    }
  }
  getCorrectAnswer() {
    return this.correctAnswerIndex;
  }
}

let firstQuestion = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestion = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

// ====================  test ========================

console.group(firstQuestion.title);
console.log(firstQuestion);
console.log(firstQuestion.options);
console.log(firstQuestion.correctAnswerIndex);
console.log(firstQuestion.isAnswerCorrect(2));
console.log(firstQuestion.getCorrectAnswer());
console.groupEnd();

console.group(secondQuestion.title);
console.log(secondQuestion);
console.log(secondQuestion.options);
console.log(secondQuestion.correctAnswerIndex);
console.log(secondQuestion.isAnswerCorrect(2));
console.log(secondQuestion.getCorrectAnswer());
console.groupEnd();
