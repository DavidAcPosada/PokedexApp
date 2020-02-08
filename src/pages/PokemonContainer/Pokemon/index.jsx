import React from 'react'
import { PokemonContainer } from '../motions/animated'
import { HeroColored, TypeIcon, TypeBadge } from './../styles'
import { TypeIconVariants, TypeIconTextVariants } from '../motions/variants'
import { motion } from 'framer-motion'
import IndicatorBar from '../../../components/IndicatorBar'
import Ability from '../../../components/Ability'

const Pokemon = (props) => {
  const { loading, data } = props

  if (loading) return <h1>Loading</h1>

  return (
    <PokemonContainer className='Pokemon'>
      <HeroColored className='Pokemon__hero' type={data.types && data.types[0].type.name}>
        <div className='Pokemon__hero-title'>
            <h3>{data.id &&  data.id.toString().padStart(3, '0')}</h3>
            <h1>{ data.name }</h1>
            <div className='Pokemon__hero-elements'>
              {
                data.types && data.types.map(({type}, index) => {
                  return (
                    <TypeIcon 
                      key={index} 
                      alt={type.name} 
                      whileHover='hover'
                      variants={TypeIconVariants}
                      type={type.name}
                    >
                      <img alt='type' src={require(`./../../../assets/img/elements/${type.name}.png`)} />
                      <motion.p variants={TypeIconTextVariants} initial='rest' className='Element__name'>{type.name}</motion.p>
                    </TypeIcon>
                  )
                })
              }
            </div>
        </div>
        <div className='Pokemon__content'>
          
          <div className='Pokemon__content-cell-img'>
            <h3>XP: <span>{data.base_experience}</span></h3>
            <img alt='sprite' src={data.sprites && data.sprites.front_default} />
          </div>

          <div className='Pokemon__content-cell-info'>
            <h3>About</h3>
            <table className='Information'>
              <tbody>
                <tr className='Information__row' >
                  <td className='Information__row-name'>Name</td>
                  <td className='Information__row-value name'>
                    {data.name && data.name.replace(/-/g, ' ')}
                  </td>
                </tr>
                <tr className='Information__row' >
                  <td className='Information__row-name'>Height</td>
                  <td className='Information__row-value'>
                    {data.height / 10} mts.
                  </td>
                </tr>
                <tr className='Information__row' >
                  <td className='Information__row-name'>Weight</td>
                  <td className='Information__row-value'>
                    {data.weight / 10} kgs.
                  </td>
                </tr>
                <tr className='Information__row' >
                  <td className='Information__row-name'>Weight</td>
                  <td className='Information__row-value types'>
                    { data.types && data.types.map((type, index) => {
                      return (
                        <TypeBadge type={type.type.name} key={index}>
                          <img src={require(`./../../../assets/img/elements/${type.type.name}.svg`)} alt='sprite' />
                          <p>{ type.type.name }</p>
                        </TypeBadge>
                      )
                    }) }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className='Pokemon__content-cell-info'>
            <h3>Basic Stats</h3>
            <table className='Stats'>
              <tbody>
                {
                  data.stats && data.stats.map((stat, index) => {
                    return (
                      <tr className='Stats__row' key={index}>
                        <td className='Stats__row-name'>{stat.stat.name.replace(/-/g, ' ')}</td>
                        <td className='Stats__row-value'>
                          <IndicatorBar value={stat.base_stat} />
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

          <div className='Pokemon__content-cell-info abilities'>
            <h3>Abilities</h3>
            {
              data.abilities && data.abilities.map(({ability}, index) => {
                return <Ability key={index} type={data.types && data.types[0].type.name} ability={ability.name} />
              })
            }
          </div>

        </div>
      </HeroColored>
    </PokemonContainer>
  )
}

export default Pokemon
