import React from 'react'
import { Link, Location } from '@reach/router'

import PokeballIcon from './../../assets/img/pokeball.png'
import HomeIcon from './../../assets/img/home.png'

import { Nav } from './animated'

import './styles.scss'

// Layout contains all routes with path '/pokemons'
const PokemonLayout = ({ children }) => {
  return (
    <div className='PokemonLayout'>
      <Nav className='PokemonLayout__nav'>
        <li className='PokemonLayout__nav-brand'>
          <Link className='icon' to='/'><img src={PokeballIcon} alt='poke' /></Link>
          <h1 className='brand'>Pokedex</h1>
        </li>
        <ul className='PokemonLayout__nav-subnav'>
          <li className='item home-btn'>
            <Location>
              {({location}) => location.pathname !== '/pokemons/pokedex' && (
                <Link to='/pokemons/pokedex'>
                  <img src={HomeIcon} alt='home' />
                </Link>
              )}
            </Location>
          </li>
        </ul>
      </Nav>
      { children }
      <div className='PokemonLayout__footer'>
        Created with <a href='https://pokeapi.co' target='_blank'  rel="noopener noreferrer">PokeApi.co</a>
      </div>
    </div>
  )

}

export default PokemonLayout
