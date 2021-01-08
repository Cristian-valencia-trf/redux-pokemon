import { combineReducers } from "redux";
import studentReducer from "./student";
import pokemonReducer from "./pokemons";

export default combineReducers({
  students: studentReducer,
  pokemons: pokemonReducer
});
