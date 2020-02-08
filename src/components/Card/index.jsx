import React from 'react'
import { motion } from 'framer-motion'

import './styles.scss'
import { CardContainer, Sprite } from './styles';
import { CardVariants, SpriteVariants, IdVariants, NameVariants } from './motions/variants';

const Card = ({ name, url }, ref) => {
  const id = url ? url.split('/')[url.split('/').length - 2] : '1'

  return (
    <CardContainer whileHover='hover' whileTap='tap' variants={CardVariants} className='Card'>
      <Sprite variants={SpriteVariants} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <motion.p variants={IdVariants} className='Card__id'>#{ id.toString().padStart(3, '0') }</motion.p>
      <motion.h2 variants={NameVariants} className='Card__name'>{name.replace(/-/g, ' ')}</motion.h2>
    </CardContainer>
  )
}

export default Card