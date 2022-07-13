import React from "react";
import Counter from "./components/Counter";
import './App.css';

let interval
class App extends React.Component {

  constructor() {
    super()

    this.state = {
      count1: 0,
      count2: 0
    }
  }

  handleClickMinus1 = (e) => {
    const countValue1 = this.state.count1
    const countValue2 = this.state.count2
    if (this.state.count1 > 0) {
      this.setState({
      count1: countValue1 - 1  
    })
    }
  }
  handleClickPlus1 = (e) => {
    const countValue1 = this.state.count1
    const countValue2 = this.state.count2
    if (this.state.count1 < 100 && countValue1 < countValue2) {
      this.setState({
        count1: countValue1 + 1
      })  
    }
    else if (this.state.count1 < 100){
      this.setState({
        count1: countValue1 + 1,
        count2: countValue2 + 1
      })
    }
    
  }

  handleClickMinus2 = (e) => {
    const countValue1 = this.state.count1
    const countValue2 = this.state.count2
    if (this.state.count2 > 0 && countValue1 < countValue2) {
      this.setState({
      count2: countValue2 - 1  
      })
    }
    else if (this.state.count2 > 0){
      this.setState({
        count1: countValue1 - 1,
        count2: countValue2 - 1 
      })
    }

  }
  handleClickPlus2 = (e) => {
    const countValue1 = this.state.count1
    const countValue2 = this.state.count2
    if (this.state.count2 < 100) {
      this.setState({
      count2: countValue2 + 1
      })
    }
    
  }
  render() {
    return (
      <div className="container bg-light rounded p-4 text-center">
        <h1>Counter</h1>
        <div className="d-flex">
          <Counter count={this.state.count1} increment={this.handleClickPlus1} substract={this.handleClickMinus1} title="Counter 1"/>
          <Counter count={this.state.count2} increment={this.handleClickPlus2} substract={this.handleClickMinus2} title="Counter 2"/>  
        </div>
        
      </div>
    );
  }
}

export default App;
