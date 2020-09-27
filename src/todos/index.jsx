import React, { Component } from "react";
import { Todolist } from "./list";

let index = 4;
export class Todos extends Component {
  state = {
    todos: [
      { text: "Todo1", id: 1, status: "COMPLETE" },
      { text: "Todo2", id: 2, status: "ACTIVE" },
      { text: "Todo3", id: 3, status: "ACTIVE" },
    ],
  };

  onInputChange = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      if (value.trim() !== "") {
        this.setState({
          todos: [
            {
              text: value,
              id: index++,
            },
            ...this.state.todos,
          ],
        });
        e.target.value = "";
      }
    }
  };

  toggleTodo = (id) => (ev) => {
      this.setState({
          todos: this.state.todos.map(
              (todo) => todo.id === id ? ({...todo, status: todo.status === "ACTIVE" ? "COMPLETE" : "ACTIVE"}) : todo
          )
      })
  }

  render() {
    return (
      <div>
        <h1>Im Todo</h1>

        <input type="text" onKeyDown={this.onInputChange} />

        <Todolist todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default Todos;
