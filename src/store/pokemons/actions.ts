import { IPokemons } from "../../interface/pokemons/IPokemons";
import { Pokemonstype } from "./types";

// Action()
// Primer argumento: Tipo de accion
// Segundo argumento: Payload
export const loadPokemon = () => ({
  type: Pokemonstype.LOAD_POKEMON
});

export const successfulLoad = (pokemon: IPokemons) => ({
  type: Pokemonstype.SUCCESSFUL_LOAD,
  payload: pokemon
});

export const failureLoad = () => ({
  type: Pokemonstype.FAILURE_LOAD
});
