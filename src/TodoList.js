import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {
            this.props.listItems.map( listItem =>(
                <li>{listItem}</li>
            ))
        }
      </ul>
    );
  }
}
