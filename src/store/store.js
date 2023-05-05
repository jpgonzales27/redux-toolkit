import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";
import { todosApi } from "./apis/todoApi";

export const store = configureStore({
  reducer: {
    /**
     * el counterSlice.reducer contiene el objeto que definimos en nuestro initialState
     * dentro de nuestro slice
     */
    contador: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    /**
     * Esto es para RTK query
     * Este funciones es compudata para almacenar en todosApi.reducerPath
     * la informacion nuestro reducer todosApi.reducer
     */
    [todosApi.reducerPath]: todosApi.reducer,
  },

  /**
   * Este middleware tb es para RTK query
   *
   * un middleware es una funcion que se ejecuta antes que otra
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
