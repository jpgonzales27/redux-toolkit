import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import { TodoApp } from "./todoApp";
// import { TodosApp } from "./todosApp";
import { TodoApp } from "./todoApp";
// import { PokemonApp } from "./pokemonApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      {/* <TodosApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
