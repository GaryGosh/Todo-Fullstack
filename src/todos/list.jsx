import React from "react";

export const Todolist = ({ todos, toggleTodo }) => {
    return todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            textDecoration: todo.status === "COMPLETE" && "line-through",
          }}
        onClick={this.toggleTodo(todo.id)}>
          {todo.text}
        </div>
      )) 
}