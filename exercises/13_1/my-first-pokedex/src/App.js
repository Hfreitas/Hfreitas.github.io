/* eslint-disable no-undef */
import React from 'react';
import pokemons from './data';
import PokemonCard from './components/PokemonCard';
import Button from './components/Button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      filter: 'All',
    };
  }

  pokemonFilter = () => {
    return this.state.filter === 'All'
      ? pokemons
      : pokemons.filter(({ type }) => type === this.state.filter);
  };

  updateIndexState = () => {
    this.setState((state) => {
      return this.state.index < this.pokemonFilter().length
        ? { index: state.index++ }
        : { index: (state.index = 0) };
    });
  };

  updateFilterState = (event) => {
    this.setState({ index: 0, filter: event.target.innerText });
  };

  /* Função filtra tipos de pokemons no array de dados:
      1.Itera sobre o array de objetos e retorna array com os valores da key 
      "type";
      2.Iniciando de um array vazio, itera sobre um array de types e verifica
      se existem
      valores repetidos, caso o valor seja único, é acrescido ao final da
       array(array criada a partir de spread operator).*/
  filterPokemonsTypes = () => {
    return pokemons
      .map((pokemon) => pokemon.type)
      .reduce(
        (types, type) => (types.includes(type) ? types : [...types, type]),
        [],
      );
  };

  render() {
    const filteredPokemons = this.pokemonFilter();
    const pokemonTypes = this.filterPokemonsTypes();
    return (
      <div className="App">
        <header className="dex-header">
          <h1>Vanilla PokeDex</h1>
        </header>
        <div>
          <PokemonCard pokemons={filteredPokemons[this.state.index]} />
        </div>
        <Button
          handleClick={this.updateIndexState}
          label="Next Pokémon"
          disabled={(filteredPokemons.length <= 1) ? true : false}
        />
        <Button handleClick={this.updateFilterState} label="All" />
        <div>
          {pokemonTypes.map((type) => (
            <Button
              key={type}
              handleClick={this.updateFilterState}
              label={type}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
