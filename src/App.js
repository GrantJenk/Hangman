import React from 'react';
import './App.css';
import getRandomAnswer from './Words';

class App extends React.Component {
  constructor(props) {
    super(props);
    let tmpAnswer = getRandomAnswer().toUpperCase();
    this.state = {
      answer: tmpAnswer,
      remainingGuesses: 6,
      lettersGuessed: [],
      answerSoFar: "_".repeat(tmpAnswer.length),
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      this.handleKeyPress(e);
    });
  }

  handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const isValid = key.match(/^[A-Z]$/);
    if (isValid) {
      this.makeGuess(key);
    }
  }

  resetGame() {
    let tmpAnswer = getRandomAnswer().toUpperCase();
    this.setState({
      answer: tmpAnswer,
      remainingGuesses: 6,
      lettersGuessed: [],
      answerSoFar: "_".repeat(tmpAnswer.length),
    });
  }

  makeGuess(letter) {
    if (this.getGameStatus() !== 'playing') return;

    const {answer, remainingGuesses, lettersGuessed, answerSoFar} = this.state;

    if (!lettersGuessed.includes(letter)) {
      let shouldDecGuesses = true;
      let tmp = [...answerSoFar];
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] === letter) {
          tmp[i] = letter;
          shouldDecGuesses = false;
        }
      }

      let tmpLettersGuessed = [...lettersGuessed];
      tmpLettersGuessed.push(letter);

      let tmpRemainingGuesses = remainingGuesses;
      if (shouldDecGuesses) { 
        tmpRemainingGuesses-- 
      };

      this.setState({lettersGuessed: tmpLettersGuessed, remainingGuesses: tmpRemainingGuesses, answerSoFar: tmp.join('')});
    }
  }

  getGameStatus() {
    const {answer, remainingGuesses, answerSoFar} = this.state;

    if (answerSoFar === answer) {
      return 'victory';
    } else if (remainingGuesses <= 0) {
      return 'defeat';
    }
    return 'playing';
  }

  renderGameOver() {
    const gameStatus = this.getGameStatus();

    return (
      <div className='game_over'>
        <h1 className='capitalize'>{gameStatus}!</h1>
        <h3>Answer: {this.state.answer}</h3>
        <button onClick={() => this.resetGame()}>Play again?</button>
        <hr />
      </div>
    );
  }

  render() {
    const {remainingGuesses, lettersGuessed, answerSoFar} = this.state;
    const gameStatus = this.getGameStatus();

    return (
      <div className="App">
        {gameStatus !== 'playing' ? this.renderGameOver() : null}
        <h1>Hangman</h1>
        <b>Guesses remaining:</b> {remainingGuesses}

        <div className='progress'>
          {answerSoFar}
        </div>

        <b>Letters guessed:</b> {lettersGuessed.join(", ")}
      </div>
    );
  }
}

export default App;
