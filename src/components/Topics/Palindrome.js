import React, {Component} from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  checkPalindrome(val) {
    this.setState({
      palindrome: val.split('').reverse().join('') === val ? 'true' : 'false'
    })
  }

  render() {
    const {userInput, palindrome} = this.state

    console.log(this.state);

    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>

        <input className='inputLine'
        onChange={event => this.handleChange(event.target.value)}/>

        <button className='confirmationButton'
        onClick={() => this.checkPalindrome(userInput)}>

          Check
        </button>

        <span className='resultsBox'>Palindrome: {palindrome}</span>
      </div>
    )
  }
}