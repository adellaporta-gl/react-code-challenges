import React from 'react';
class ScoreKeeper extends React.Component {
  constructor(props) {
    super(props);
    const curScore = Number(localStorage.getItem('score'));
    this.state = {
      score: curScore
    }

  }
  render() {
    return (
      <div>
        <h1>Your score is: {this.state.score}</h1>
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleMinusClick}>-</button>
      </div>
    );
  }
  handlePlusClick = () => {
    localStorage.setItem('score', this.prevScore() + 1);
    this.setState({ score: localStorage.getItem('score') })
  }
  handleMinusClick = (syntheticEvent) => {
    localStorage.setItem('score', this.prevScore() - 1);
    this.setState({ score: localStorage.getItem('score') })
  }
  prevScore = () => {
    return Number(localStorage.getItem('score'));
  }
}
export default ScoreKeeper;