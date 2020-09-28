import React from "react";

export const TodoList = ({ todos, toggleTodo }) => {
    return todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            textDecoration: todo.status === "COMPLETE" && "line-through",
          }}
        onClick={toggleTodo(todo.id)}>
          {todo.text}
        </div>
      )) 
}