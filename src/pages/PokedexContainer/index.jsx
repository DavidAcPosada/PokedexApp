import React, { useState, useRef, useCallback, useMemo } from 'react'

import './styles.scss'
import { Pokedex } from './Pokedex'
import useListPokemon from '../../utils/hooks/useListPokemons'

const PokedexContainer = (props) => {

  const [filterData, setFilterData] = useState([])
  const [filter, setFilter] = useState('')

  const [offset, setOffset] = useState(0)
  const { results, loading, error, hasMore } = useListPokemon(offset)

  const observer = useRef() // Observe if the lastElement is visible
  const lastElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect() // disconnect observer for set other ref
    observer.current = new IntersectionObserver(entries => { 
      if (entries[0].isIntersecting && hasMore) { // If the element is on display and the querie has more results
        setOffset(offset + 20) // add range to offset and send to useListPokemon and dispatch the hook
      } 
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore, offset])

  useMemo(() => { // filter function
    const result = results.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(filter.toLowerCase())
    })
    setFilterData(result)
  }, [results, filter])

  return <Pokedex loading={loading} error={error} results={filterData} lastElementRef={lastElementRef} filter={{filter, setFilter}} />
}

export default PokedexContainer