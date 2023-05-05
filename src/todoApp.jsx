import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todoApi";

export const TodoApp = () => {
  const [todoId, setTodo] = useState(1);
  const { isLoading: isLoading, data: todo } = useGetTodoQuery(todoId);

  const nextTo = () => setTodo(todoId + 1);
  const prevTo = () => {
    if (todoId === 1) return;
    setTodo(todoId - 1);
  };

  return (
    <>
      <h1>Rtk query</h1>
      <hr />
      <h4>isLoading...{isLoading ? "TRUE" : "FALSE"}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <hr />
      <br />
      <button onClick={nextTo}>Next Todo</button>
      <button onClick={prevTo}>Prev Todo</button>
    </>
  );
};
