import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    /**
     * el counterSlice.reducer contiene el objeto que definimos en nuestro initialState
     * dentro de nuestro slice
     */
    contador: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});
