import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
  }

  addTodo(itemName) {
    var currentList = this.state.todoItems;
    currentList.push(itemName);
    this.setState({
      todoItems: currentList
    });
  }

  render() {
    return (
      <div>
        <h1> Todo App</h1>

        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList listItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
