import React from "react";
import Boton from "../../components/boton/Boton";
import Field from "../../components/field/Field";
import { IPokemons } from "../../interface/pokemons/IPokemons";

interface IListPokemon {
  data: IPokemons[];
  loadPokemon(): void;
}

export default function ListPokemon(props: IListPokemon) {
  const { data, loadPokemon } = props;

  React.useEffect(() => {
    loadPokemon();

    console.log("aqui", data);
  }, []);

  return (
    <div>
      {data.map((element: IPokemons) => (
        <li key={element.name}>{element.name}</li>
      ))}
    </div>
  );
}
