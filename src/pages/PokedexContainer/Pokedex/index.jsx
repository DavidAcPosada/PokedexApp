import React from 'react'
import { PokedexContent, Content } from '../motions/animated'

import PokeballLoading from './../../../assets/img/pokeball-loader.gif'
import PokeballError from './../../../assets/img/error.png'

import Card from '../../../components/Card'
import { Link } from '@reach/router'

export const Pokedex = ({ loading, error, results, lastElementRef, filter }) => {
  
  return (
    <PokedexContent className='Pokedex'>

      <div className='Pokedex__filter'>
        <h3>Search pokemons</h3>
        <input defaultValue={filter.filter} onChange={(e) => filter.setFilter(e.target.value)} placeholder='Search by name of pokemons' />
      </div>

      <Content className='Pokedex__content'>
        {
          results.map((item, index) => {
            const id = item.url.split('/')[item.url.split('/').length - 2]
            if (results.length === index + 1) {
              return (
                <Link className='Pokedex__link' to={id} key={index} ref={lastElementRef}><Card name={item.name} url={item.url} /></Link>
              )
            } else {
              return (
                <Link className='Pokedex__link' to={id} key={index}><Card name={item.name} url={item.url} /></Link>
              )
            }
          })
        }  
      </Content>
      
      { loading &&  <div className='Pokedex__loader'><img src={PokeballLoading} alt='loader' /></div> }
      { error && (<div className='Pokedex__error'><img src={PokeballError} alt='error' /><h3>Error! Your pokemon has escaped</h3></div>)}
      { results.length === 0 && <h3 className='Pokedex__not-found'>Not found results with {filter.filter}...</h3> }
    </PokedexContent>
  )
}
