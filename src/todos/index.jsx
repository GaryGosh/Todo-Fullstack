import React, { Component } from "react";
import { TodoList } from "./list";

let index = 4;
export class Todos extends Component {
  state = {
    todos: [
      { text: "Todo1", id: 1, status: "COMPLETE" },
      { text: "Todo2", id: 2, status: "ACTIVE" },
      { text: "Todo3", id: 3, status: "ACTIVE" },
    ],
    filter: "ALL",
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
      });
  };

  applyFilter = (filter) => (ev) => {
    this.setState({ filter });
  };

  getTodos = () => {
    switch (this.state.filter) {
      case "ACTIVE": {
        return this.state.todos.filter((todo) => (
          todo.status === "ACTIVE"
        ));
      }
      case "COMPLETE": {
        return this.state.todos.filter(todo => (
          todo.status === "COMPLETE"
        ))
      }
        
      default: return this.state.todos;
    }
  }

  render() {
    return (
      <div>
        <h1>Im Todo</h1>

        <input type="text" onKeyDown={this.onInputChange} />

        <TodoList todos={this.getTodos()} toggleTodo={this.toggleTodo} />

        <div>
          <button onClick={this.applyFilter("ALL")}>ALL</button>
          <button onClick={this.applyFilter("ACTIVE")}>ACTIVE</button>
          <button onClick={this.applyFilter("COMPLETE")}>COMPLETE</button>
        </div>
      </div>
    );
  }
}

export default Todos;
