import { useGetTodosQuery } from "./store/apis/todoApi";

export const TodosApp = () => {
  // const algo = useGetTodosQuery();
  // console.log(algo);
  const { isLoading, data: todos } = useGetTodosQuery();

  return (
    <>
      <h1>Rtk query</h1>
      <hr />
      <h4>isLoading...{isLoading ? "TRUE" : "FALSE"}</h4>

      <hr />
      <br />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {" "}
            <strong>{todo.completed ? "DONE" : "PENDING"}</strong> :{todo.title}
          </li>
        ))}
      </ul>
      <button>Next Todo</button>
    </>
  );
};
