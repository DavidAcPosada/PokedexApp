import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.div)`
  text-align: center;
  background: #F5F5F5;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, .5);
  padding: 20px 10px;
  margin: 10px;
  overflow: hidden;
`

export const Sprite = styled(motion.img)`
  width: 100px;
  height: 100px;
  image-rendering: pixelated;
  background: rgba(0, 0, 0, .16);
  padding: 10px;
  border-radius: 100%;
`
