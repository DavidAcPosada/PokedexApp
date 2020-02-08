import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

import './styles.scss'
import Axios from 'axios'

const PokemonContainer = ({ id }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${id}`
    }).then(res => {
      setLoading(false)
      setData(res.data)
    })
  }, [id])

  const passedProps = {
    data,
    loading
  }
  return <Pokemon {...passedProps} />
}

export default PokemonContainer
