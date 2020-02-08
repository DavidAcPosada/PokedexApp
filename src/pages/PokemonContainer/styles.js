import styled from 'styled-components'
import { Hero } from './motions/animated'

import hexToRgba from 'hex-to-rgba'
import { motion } from 'framer-motion'

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

export const HeroColored = styled(Hero)`
  padding: 80px 10%;
  padding-bottom: 0;
  font-family: 'Poppins', Arial;
  text-transform: capitalize;
  background: ${({ type }) => hexToRgba(`#${BG_COLORS[type]}`, '0.3')};
  background: -moz-linear-gradient(180deg, ${({ type }) => hexToRgba(`#${BG_COLORS[type]}`, '0.3')} 0%, transparent 100%);
  background: -webkit-linear-gradient(180deg,${({ type }) => hexToRgba(`#${BG_COLORS[type]}`, '0.3')} 0%, transparent 100%);
  background: linear-gradient(180deg, ${({ type }) => hexToRgba(`#${BG_COLORS[type]}`, '0.3')} 0%, transparent 100%);

  & .Pokemon__hero-title { 
    margin-top: 50px;

    & h3 {
      color: rgba(0, 0, 0, .5);
      font-family: 'Poppins', Arial;
      font-size: 30px;
      margin-bottom: -15px;
    }

    & h1 {
      color: ${({ type }) => `#${BG_COLORS[type]}`};
      font-size: 10vw;
      line-height: 11vw;

      @media screen and (max-width: 1150px) {
        font-size: 16vw;
        line-height: 17vw;
      }
      
      @media screen and (max-width: 680px) {
        font-size: 15vw;
        line-height: 21vw;
      }
    }
  }
`

export const TypeIcon = styled(motion.div)`
  width: 50px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 100%;
  }

  & p {
    background: rgba(0, 0, 0, .16);
    color: #fff;
    padding: 5px 10px;
    border-radius: 20px;
  }
`

export const TypeBadge = styled.div`
  background: ${({ type }) => `#${BG_COLORS[type]}`};
  margin-right: 10px;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  transition: .3s ease;

  & img {
    width: 20px;
    margin-right: 10px;
  }

  & p {
    line-height: 20px;
    padding-right: 10px;
    font-weight: bold;
    color: #fff;
    font-family: 'Poppins', Arial;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    transition: .3s ease;
  }
`
