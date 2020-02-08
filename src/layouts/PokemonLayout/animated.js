import posed from 'react-pose'

export const Nav = posed.nav({
  enter: {
    y: 0
  },
  exit: {
    y: -50
  }
})