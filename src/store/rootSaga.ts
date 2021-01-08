import { all, takeLatest } from "redux-saga/effects";
import { Pokemonstype } from "./pokemons/types";
import { getPokemons } from "./pokemons/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(Pokemonstype.LOAD_POKEMON, getPokemons)]);
}
