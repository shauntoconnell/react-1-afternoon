import React, {Component} from 'react';

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      userInput1: 0,
      userInput2: 0,
      sum: null
    }
  }

  render() {
    const {userInput1, userInput2, sum} = this.state;

    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>

        <input className='inputLine'
        onChange={event => this.setState({userInput1: event.target.value})}/>

        <input className='inputLine'
        onChange={event => this.setState({userInput2: event.target.value})}/>

        <button className='confirmationButton'
        onClick={() => this.setState({sum: +userInput1 + +userInput2})}>
          Add
        </button>

        <span className='resultsBox'>
          Result: {sum}
        </span>

      </div>
    )
  }
}