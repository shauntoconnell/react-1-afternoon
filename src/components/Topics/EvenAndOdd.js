import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }
  
  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  assignEvensAndOdds(val) {
    console.log(typeof val);
    this.setState({
      evenArray: val.split(',').filter(v => v%2 === 0),
      oddArray: val.split(',').filter(v => v%2 === 1)
    })
  };

  render() {
    console.log(this.state);

    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>

        <input
          className='inputLine'
          onChange={event => this.handleChange(event.target.value)}
          />

        <button
          className='confirmationButton'
          onClick={() => this.assignEvensAndOdds(this.state.userInput)}
          >
          
          Split
        </button>

        <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}