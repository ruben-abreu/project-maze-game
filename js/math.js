class MathGame {
  constructor() {
    this.name = '';
    this.num1 = 0;
    this.num2 = 0;
    this.operator = '';
    this.answerButton = document.querySelector('#answerBtn');
    this.num1Field = document.querySelector('#num1');
    this.num2Field = document.querySelector('#num2');
    this.operatorField = document.querySelector('#operator');
    this.answerField = document.querySelector('#answerInput');
    this.messageField = document.querySelector('#message');
    this.winnerScreen = document.getElementById('winner-screen');
    this.body = document.querySelector('body');
    this.mathGame = document.getElementById('math');
    this.attempts = document.getElementById('attempts');
    this.score = 3;
    this.timer = new Timer();
  }

  fillFields() {
    this.num1Field.textContent = this.num1;
    this.num2Field.textContent = this.num2;
    this.operatorField.textContent = this.operator;
    this.attempts.textContent = `Number of attempts left: ${this.score}`;
    this.answerField.addEventListener('input', () => {
      this.answerField.innerText = InputEvent;
    });
  }

  randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  createEquation() {
    this.num1 = this.randomNumber(50);
    this.num2 = this.randomNumber(50);
    const operators = ['+', '-'];
    this.operator = operators[this.randomNumber(operators.length)];
    this.fillFields();
  }

  evaluateAnswer() {
    const answer = Number(this.answerField.value);

    switch (this.operator) {
      case '+':
        this.handleAnswer(answer === this.num1 + this.num2);
        break;
      case '-':
        this.handleAnswer(answer === this.num1 - this.num2);
        break;
    }

    this.createEquation();
  }

  handleAnswer(isCorrect) {
    if (isCorrect) {
      this.winnerScreen.style.display = 'block';
      this.body.style.backgroundImage = 'url(images/winner-image.png)';
      this.mathGame.style.display = 'none';
    } else {
      this.score--;
      console.log(this.score);
      if (this.score <= 0) {
        this.timer.showGameOver();
        this.mathGame.style.display = 'none';
      }
      this.messageField.textContent = 'Wrong! You can try again';
    }
    this.answerField.value = '';
  }

  startGame() {
    this.createEquation();
    this.answerButton.addEventListener('click', () => this.evaluateAnswer());
  }
}

const mathGame = new MathGame();
mathGame.startGame();
