import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleUserInput(val) { 
        this.setState( {userInput: val} )
    }

    checkPalindrome() {
        let forwardsArr = this.state.userInput.split('')
        let backwardsArr = []
        for (let i = forwardsArr.length; i >= 0; i--) {
            backwardsArr.push(forwardsArr[i])
        }

        if (this.state.userInput === backwardsArr.join('')) {
            this.setState({palindrome: 'true'})
        }else{
            this.setState({palindrome: 'false'})
        }
        
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input type='' className='inputLine' onChange={(e) => this.handleUserInput(e.target.value)}/>
                <button type='' className='confirmationButton' onClick={ () => this.checkPalindrome() }>check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div> 
        )
    }
}