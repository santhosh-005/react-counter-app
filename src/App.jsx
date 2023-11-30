import "./app.css"
import React, { Component } from 'react'


export class App extends Component {

  constructor(){
    super()
    this.state = {
      count:0
    }
  }
 
incrementCount=()=>{
  this.setState((b_state)=>({
    count:b_state.count+1
  }))
}

decrementCount=()=>{
  this.setState((b_state)=>{
    return{
    count:b_state.count-1
    }
})
}


reset=()=>{
  this.setState(()=>({count:0}))
}

  render(){
    return (
      <>
        <center>
          <h1>Counter App</h1>
          <h2>{this.state.count}</h2>
          <span>
            <button onClick={this.incrementCount}>+</button>
            <button onClick={this.decrementCount}>-</button>
            <button onClick={this.reset}>Reset</button>
          </span>
        </center>
      </>
    )
  }
}

export default App

