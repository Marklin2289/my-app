import React, { ChangeEvent, FormEvent, useState } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}
export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        placeholder="Add a Task"
        onChange={handleChange}
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
