import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
    super()
        
    this.state = {
        number1: 0,
        number2: 0,
        sum: 0
        }
    }

    
    handleUserInput(val,fldName){
        if (fldName === 'first') {
            this.setState({ number1: val })
        }else{
            this.setState({ number2: val })
        }
    }

    calculate(){
        this.setState({ sum: Number(this.state.number1) + Number(this.state.number2) })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input name='first' className='inputLine' onChange={(e) => this.handleUserInput(e.target.value, e.target.name)}/>
                <input name='second' className='inputLine' onChange={(e) => this.handleUserInput(e.target.value, e.target.name)}/>
                <button type='' className='confirmationButton' onClick={() => this.calculate()}>Calculate</button>
                <span className='resultsBox'>Result: {this.state.sum}</span>
            </div>
        )
    }
}