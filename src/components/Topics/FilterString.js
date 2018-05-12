import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unfilteredArray: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput: '',
            filteredArray: []
        }
    }

    handleUserInput(val) {
        this.setState({userInput: val})
    }

    filterArray() {
       
        this.setState({filteredArray: this.state.unfilteredArray.filter((item) => item.includes(this.state.userInput)) })

    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray)} </span>
                <input type='' className='inputLine' onChange={(e) => this.handleUserInput(e.target.value)}/>
                <button type='' className='confirmationButton' onClick={() => this.filterArray()}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div> 
        )
    }
}