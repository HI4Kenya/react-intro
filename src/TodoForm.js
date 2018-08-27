import React, { Component } from "react";

export default class TodoForm extends Component {
  clickHandler() {
    this.props.addTodo("item");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}> Add Todo </button>

        <input type="text" name="todo" />
      </div>
    );
  }
}
