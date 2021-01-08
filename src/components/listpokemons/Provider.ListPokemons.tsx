import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IPokemons } from "../../interface/pokemons/IPokemons";
import ListPokemons from "./ListPokemons";
import { loadPokemon } from "../../store/pokemons/actions";

const MapStateToProps = (state: any) => ({
  data: state.pokemons.data as IPokemons[]
});

const MapDispatchToProps = (dispatch: Dispatch) => ({
  loadPokemon: () => dispatch(loadPokemon())
});

export default connect(MapStateToProps, MapDispatchToProps)(ListPokemons);
