import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  /**
   * el dispatch nos sirve para lanzar un accion
   *
   * el getState nos sirve para obtener alguna informacion del state
   */
  return async (dispatch, getState) => {
    dispatch(startLoading());

    /**
     * Usando Fetch de forma tradicional
     */
    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );
    const data1 = await resp.json();
    console.log(data1);
    // dispatch(setPokemons({ pokemons: data1.results, page: page + 1 }));

    /**
     * Usando axios
     */

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
