import React from "react";
import "./styles.css";
import { TodoInterface } from "../model";

interface PropsInterface {
  todos: TodoInterface[];
  setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
}

const TodoList: React.FC<PropsInterface> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
