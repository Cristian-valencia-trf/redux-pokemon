import * as React from "react";
import "./styles.css";
import ProviderListData from "./components/listdata/Provider.ListData";
import { Provider } from "react-redux";
import store from "./store";
import ProviderPokemons from "./components/listpokemons/Provider.ListPokemons";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ProviderListData /> */}
        <ProviderPokemons />
      </div>
    </Provider>
  );
}
