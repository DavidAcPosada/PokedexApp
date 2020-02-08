import React from 'react'
import { Link } from '@reach/router'
import { motion } from 'framer-motion'

// Resorces imports
import PokeballTrigger from './../../assets/img/pokeball.png'
import PokeballPlaceholder from './../../assets/img/pokeball-icon.png'

// Import of animate variants for animated components
import variants from './motions/variants'

// Animated components import
import { HomeContainer, Hero, Info, Created, PlaceholderImage } from './motions/animated'

// Import styles of page
import './styles.scss'

const Home = () => { 

  return (
    <HomeContainer className='Home'>
      <Hero className='Home__hero'>
        <h1>POKEMON APP</h1>
        <PlaceholderImage src={PokeballPlaceholder} alt='icon' />
      </Hero>
      <Info className='Home__info'>
        <motion.div className='Home__pokeball-container' whileHover='hover' whileTap='tap'>
          <Link to='/pokemons/pokedex' className='Home__info-link'>
            <motion.img 
              src={PokeballTrigger} 
              variants={variants.pokeballVariants}
              initial='rest'
              alt='pokeball-trigger' 
              className='Home__info-link-img' 
              />
            <motion.p
              variants={variants.pokeballText} 
              initial='rest' 
              >
              Click Here
            </motion.p>
          </Link>
        </motion.div>
        <Created className='Home__info-created'>Created by Cristian Acevedo</Created>
      </Info>
    </HomeContainer>
  )
}


export default Home