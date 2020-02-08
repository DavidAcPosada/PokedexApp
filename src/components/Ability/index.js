import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './style.scss'

const BG_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
}

export default ({ ability, type = 'normal' }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    Axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/ability/${ability}`
    }).then(res => setData(res.data))
  }, [ability])

  return (
    <div className='Ability'>
      <h4 className='Ability__name' style={{ color: `#${BG_COLORS[type]}` }}>{data.name && data.name.replace(/-/g, ' ')}</h4>
      <p className='Ability__effect'><b>Effect:</b> {data.effect_entries && data.effect_entries[0].effect}</p>
      <p className='Ability__short-effect'><b>Short effect:</b> {data.effect_entries && data.effect_entries[0].short_effect}</p>
    </div>
  )
}
