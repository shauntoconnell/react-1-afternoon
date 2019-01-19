import React, {Component} from 'react';

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        'James', 'Jessica', 'Melody', 'Tyler',
        'Blake', 'Jennifer', 'Mark', 'Maddy'
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  filterArray(val) {
    this.setState({
      filteredArray: this.state.unfilteredArray.filter(v => v.includes(val))
    })
  }

  render() {
    const {unfilteredArray, userInput, filteredArray} = this.state;

    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>

        <span className='puzzleText'>
          Original: {JSON.stringify(unfilteredArray)}
        </span>

        <input className='inputLine'
        onChange={event => this.handleChange(event.target.value)}/>

        <button className='confirmationButton'
        onClick={() => this.filterArray(userInput)}>
        
          Filter
        </button>

        <span className='resultsBox filterStringRB'>
          Filtered: {JSON.stringify(filteredArray)}
        </span>
      </div>
    )
  }
}