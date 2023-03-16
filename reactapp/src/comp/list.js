import React, { Component } from "react";

class TodoList extends Component {
  state = {
    items: [],
    value: "" 
  };


  handlerInput = (event) => {
    const addValue = event.target.value;
    this.setState({ value: addValue });
  };


  Add = () =>{
    this.setState({items: [...this.state.items, this.state.value]})
    this.setState({ value: ""})

  }

  reset = () =>{
    this.setState({items: [], value: ""})}

    Meno = () => {
      newArr = this.state.items
      item.splice
    }
 
  render() {
    return (
      <div>
        <ul>
        {this.state.items.map((item, index)=>  <li>
          {item} <button onClick={this.Meno}>-</button></li>)}
        </ul>
        <input value={this.state.value} onChange={this.handlerInput}></input>
        <button onClick={this.Add}>+</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default TodoList;