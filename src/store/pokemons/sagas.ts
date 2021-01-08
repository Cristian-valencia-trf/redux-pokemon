import { call, put } from "redux-saga/effects";
import axios from "axios";
import { failureLoad, successfulLoad } from "./actions";

const API = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
});

export function* getPokemons() {
  try {
    const response = yield call(API.get, "pokemons");
    yield put(successfulLoad(response.results));
  } catch (error) {
    yield put(failureLoad());
  }
}
