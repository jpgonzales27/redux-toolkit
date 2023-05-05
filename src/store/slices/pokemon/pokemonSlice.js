import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoading: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

/**
 * Nos crea acciones que podemos usar en nuestros dispatch
 */
export const { startLoading, setPokemons } = pokemonSlice.actions;
