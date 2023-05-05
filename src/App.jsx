import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";

function App() {
  /**
   * useSelector() nos ayuda a obtener informacion que almacenados en nuestro store
   *
   * el { counter } es el valor que almacenamos en nestro initialState
   *
   * state es el estado global de nuestra app y estamos accediendo al contador
   * donde almacenamos el stado inisial de nuestra app
   */
  const { counter } = useSelector((state) => state.contador);

  /**
   * useDispatch nos permitira ejecutar acciones que hayamos definido dentro de nuestro slice
   */
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="#">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h4>count is {counter}</h4>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          incrementar
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrementar
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(2));
          }}
        >
          incrementar en dos
        </button>
      </div>
    </>
  );
}

export default App;
