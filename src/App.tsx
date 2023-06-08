import "./App.css";
import { DefaultButton } from "./compoments/defaultButton";

interface Pokemon {
  name: string;
  url: string;
}

function App() {
  function showPokemons(pokeData: Pokemon) {
    const titleText = document.getElementById("title");
    if (titleText) {
      titleText.textContent = pokeData.name;
    }
  }

  async function getPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    const pokeData: Pokemon[] = data.results;
    const allPokemonsName: string[] = [];
    pokeData.forEach((poke) => allPokemonsName.push(poke.name));
    console.log(allPokemonsName);
    showPokemons(pokeData[0]);
  }

  return (
    <>
      <div>
        <h2 id="title">Typescript Iniciantes</h2>
        <div>
          <DefaultButton
            onClick={getPokemons}
            text="Clique Aqui"
            color="red"
            textColor="white"
          />
        </div>
      </div>
    </>
  );
}

export default App;
