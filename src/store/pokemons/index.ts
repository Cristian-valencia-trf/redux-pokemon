import { IPokemons } from "../../interface/pokemons/IPokemons";
import { Pokemonstype } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: pokemonApi = {
  data: [],
  error: false,
  loading: false
};
interface pokemonApi {
  data: IPokemons[];
  loading: boolean;
  error: boolean;
}

const reducer: Reducer<pokemonApi> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Pokemonstype.LOAD_POKEMON:
      return {
        loading: true,
        error: false,
        data: []
      };

    case Pokemonstype.SUCCESSFUL_LOAD:
      return {
        loading: false,
        error: false,
        data: action.payload
      };

    case Pokemonstype.FAILURE_LOAD:
      return {
        loading: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
};
export default reducer;
