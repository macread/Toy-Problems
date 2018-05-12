import React, { Component } from 'react';

export default class FilterObjectComponent extends Component {
    constructor(){
        super();

        this.state = {
            unfilteredArray: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput(val){
        this.setState({ userInput: val })
    }

    filterArray(){
        let filtered = []

        filtered = this.state.unfilteredArray.filter((item) => !item[this.state.userInput] )
        this.setState({ filteredArray: filtered })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray)} </span>
                <input type='' className='inputLine' onChange={(e) => this.handleInput(e.target.value)}/>
                <button type='' className='confirmationButton' onClick={() => this.filterArray()}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div> 
        )
    }
}