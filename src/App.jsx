import React from 'react';

import { Redirect } from '@reach/router';
import AnimatedRouter from './components/AnimatedRouter'

import Home from './pages/Home';
import PokedexContainer from './pages/PokedexContainer';
import PageNotFound from './pages/PageNotFound';
import PokemonLayout from './layouts/PokemonLayout';
import PokemonContainer from './pages/PokemonContainer';

import './App.scss';

const App = () => {
  return (
    <AnimatedRouter>
      <Home path='/' />
      <PokemonLayout path='/pokemons'>
        <PokedexContainer path='/pokedex' />
        <PokemonContainer path='/pokedex/:id' />
      </PokemonLayout>

      <PageNotFound path='/404' />

      <Redirect noThrow from='*' to='/404' />
    </AnimatedRouter>
  );
}

export default App;
