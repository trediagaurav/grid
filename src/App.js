import React from 'react';
import Grid from './Grid';
import movies from './data_a';
import pokemon from './data_b';

const Trailer = ({ data }) => (
  <a href={data.map(link => link.url)}
    target="_blank"
    rel="noopener noreferrer">
    trailer...
  </a>
);
const PokemonName = ({ data }) => <span style={{ textTransform: 'capitalize' }}>{data}</span>;

const title = movies.map(data => data.Title)

const rate = movies.map(data => data.imdbRating)

const Id = movies.map(data => data.imdbID)

const trailer = movies.map(data => {
  return <a href={data.Trailer.url}
    target="_blank"
    rel="noopener noreferrer">
    trailer...
  </a>
})

const name = pokemon.map(data => {
  return <span style={{ textTransform: 'capitalize' }}>{data.name}</span>;
})
const number = pokemon.map(data => data.number)

const moviesConfig = [

  {
    title: 'id',
    field: Id
  },
  {
    title: 'title',
    field: title
  },
  {
    title: 'rating',
    field: rate,
  },
  {
    title: 'trailer',
    field: trailer,
    //  component: Trailer({data: trailer})
  }
];

const pokemonConfig = [
  {
    title: 'pokedex #',
    field: number
  },
  {
    title: 'name',
    field: name,
    // component: PokemonName({data: name})
  },
];

const App = () => (
  <div>
    <h2>Movies</h2>
    <Grid config={moviesConfig} data={movies} />

    <h2>Pokemon</h2>
    <Grid config={pokemonConfig} data={pokemon} />
  </div>
);

export default App;
