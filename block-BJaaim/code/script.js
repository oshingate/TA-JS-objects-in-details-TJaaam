let root = document.querySelector(".quiz-div");

let allQue = [
  { title: "1+1=?", options: [2, 4, 6, 7], correctAnswer: 0 },
  { title: "2+2=?", options: [2, 4, 6, 7], correctAnswer: 1 },
  { title: "3+4=?", options: [2, 4, 6, 7], correctAnswer: 3 },
];
let quesWithMethods = [];

class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer + 1;
  }
  isCorrect(answer) {
    if (this.correctAnswer == answer) {
      alert(true);
    } else {
      alert(false);
    }
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }

  createUI() {
    let div = document.createElement("div");
    div.classList.add("question-div");
    let h5 = document.createElement("h5");
    h5.innerText = this.title;
    let ul = document.createElement("ul");
    this.options.forEach((element, index) => {
      let li = document.createElement("li");
      li.innerText = element;
      //   let input = document.createElement("input");
      //   input.type = "radio";
      //   input.name = `option`;
      //   input.value = index + 1;
      //   let span = document.createElement("span");
      //   span.innerText = element;

      //   li.append(span);
      ul.append(li);
    });
    let divFooter = document.createElement("div");
    divFooter.classList.add("quiz-div-footer");
    let submitBtn = document.createElement("a");
    submitBtn.classList.add("btn");
    submitBtn.href = "#";
    submitBtn.innerText = "Submit";
    ul.addEventListener("click", (event) => {
      //   this.isCorrect(2);

      let val = event.target.innerText;
      let indexOfVal = this.options.indexOf(Number(val)) + 1;
      this.isCorrect(indexOfVal);
    });
    let nextBtn = document.createElement("a");
    nextBtn.classList.add("btn", "next-btn");
    nextBtn.href = "#";
    nextBtn.innerText = "Next Question";
    divFooter.append(submitBtn, nextBtn);
    div.append(h5, ul, divFooter);
    return div;
  }
}

// quiz class

class Quiz {
  constructor(allQuestions, activeIndex, score) {
    this.allQuestions = allQuestions;
    this.activeIndex = activeIndex;
    this.score = score;
  }
  nextQuestion() {
    this.activeIndex += 1;
    // return this.allQuestions[this.activeIndex];
    this.createUI();
  }
  updateScore(newScore = 1) {
    this.score += newScore;
  }
  createUI() {
    root.innerText = "";
    let uiEle = this.allQuestions[this.activeIndex].createUI();
    let nextBtn = uiEle.querySelector(".next-btn");
    nextBtn.addEventListener("click", () => {
      this.nextQuestion();
    });
    root.append(uiEle);
  }
}

//======================= adding all questions to  quesWithMethods array ======================

allQue.forEach((ele) => {
  let que = new Question(ele.title, ele.options, ele.correctAnswer);
  quesWithMethods.push(que);
});

let quiz1 = new Quiz(quesWithMethods, 0, 0);
// ============================================
let submit = document.querySelector(".btn");

//=================== last method to call=====================
quiz1.createUI();
