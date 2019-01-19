import React, {Component} from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      filteredArray: [],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  filterObject(val) {
    this.setState({
      filteredArray: this.state.unfilteredArray.filter(obj => obj[val])
    })
  }

  render() {
    console.log(this.state);
    
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>

        <span className='puzzleText'>
          Original: {JSON.stringify(this.state.unfilteredArray)}
        </span>

        <input
          className='inputLine'
          onChange={event => this.handleChange(event.target.value)}/>

        <button
          className='confirmationButton'
          onClick={() => this.filterObject(this.state.userInput)}>
          
          Filter
        </button>

        <span className='resultsBox filterObjectRB'>
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    )
  }
}