import React, { Component } from 'react';
import  './App.css';

class App extends Component { 
  //Initialize with 0 because it will be an integer. 
  //Can cause problems with strict languages if entered as null
  state = {
    gameType: '',
    winningNumber: 0,
    userNumber: 0,
    userNumberType: '',
    highScore: 0,
    standardHighScore: 0,
    expertHighScore: 0,
    submitCount: 0,
    numberOfGuesses: 0
  }

  standardHandler = () => {
    this.resetHandler()
    this.setState({
      gameType: 'Standard',
      winningNumber: this.mathFunction(10),
    })
  }

  expertHandler = () => {
    this.resetHandler()
    this.setState({ gameType: 'Expert'})
    this.setState({ winningNumber: this.mathFunction(100)})
  }

  mathFunction = (num) => Math.floor(Math.random() * num + 1)
  numberChange = (e) => {
    this.setState({ userNumber: parseInt(e.target.value, 10) })
    this.setState({ userNumberType: '' })
  }

  submit = () => {
    const { userNumber, winningNumber} = this.state;
    const newSubmitCount = this.state.submitCount + 1
    console.log(this.state.submitCount)
    this.setState({ submitCount: newSubmitCount })

    if (this.state.gameType === 'Standard') {
      if (userNumber > winningNumber) {
        this.setState({ userNumberType: 'high'})
      } else if (userNumber < winningNumber) {
        this.setState({ userNumberType: 'low'})
      } else if (userNumber === winningNumber) {
        this.setState({ userNumberType: 'exact'})
        if(this.state.standardHighScore === 0 || newSubmitCount < this.state.standardHighScore) {
          this.setState({ standardHighScore: newSubmitCount})
        }
        this.setState({ numberOfGuesses: newSubmitCount})
        this.setState({ submitCount: 0})
      }
      else {
      }
    } else if (this.state.gameType === 'Expert') {
      if (userNumber > winningNumber) {
        this.setState({ userNumberType: 'high'})
      } else if (userNumber < winningNumber) {
        this.setState({ userNumberType: 'low'})
      } else if (userNumber === winningNumber) {
        this.setState({ userNumberType: 'exact'})
        if(this.state.expertHighScore === 0 || newSubmitCount < this.state.expertHighScore) {
          this.setState({ expertHighScore: newSubmitCount})
        }
        this.setState({ numberOfGuesses: newSubmitCount})
        this.setState({ submitCount: 0})
      }
      else {
      }
    }

  }

    //Better way of cleaning up this.setState so it isn't added to every label

  resetHandler = () => {
    this.setState({ 
      gameType: '',
      winningNumber: 0,
      userNumber: 0,
      userNumberType: '',
    })
  }

  render() {
    let message = '';
   if (this.state.userNumberType === 'high') {
     message = 'Too high! Guess again!'
   } else if (this.state.userNumberType === 'low') {
    message = 'Too low! Guess again!'
  } else if (this.state.userNumberType === 'exact') {
    message = 'You got it dude!';
  } else {
    message = 'Enter in a valid number!';
  }
  
    return (
      <div className="Game">
           <header className="App-header">
             <h1 className="App-title">Start Game</h1>
           </header>
           <div className="Game-selection">
             <button className="selection" onClick={this.standardHandler}>Standard</button>
             <button className="selection" onClick={this.expertHandler}>Expert</button>
             <button className="selection" onClick={this.resetHandler}>Reset</button>
             {this.state.gameType !== '' &&
              <div>
                {this.state.userNumberType !== 'exact' &&
                <div className="Game-input">
                  <input type="text" onChange={this.numberChange.bind(this)}/>
                  <input type="submit" onClick={this.submit}/>
                </div>
                }
                <div>{message}</div>
                {this.state.userNumberType === 'exact' &&
                <div>
                  <div>High Score: {this.state.highScore}</div>
                  <div>Number of Guesses: {this.state.numberOfGuesses} </div>
                </div>
                }
              </div>  
            }
           </div>
            <div>
              <p>Standard High Score: {this.state.standardHighScore}</p>
              <p>Expert High Score: {this.state.expertHighScore}</p>
            </div>  
         </div>
    )
  }
}

export default App;
