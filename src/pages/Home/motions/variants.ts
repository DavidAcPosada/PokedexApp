const pokeballVariants = {
  rest: {
    rotate: 19,
    scale: 1
  },
  hover: {
    scale: 1.2,
    rotate: 380,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  tap: {
    scale: 8,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const pokeballText = {
  rest: {
    marginTop: 85,
    scale: 1
  },
  hover: {
    marginTop: -10,
    scale: 0.2,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

export default {
  pokeballVariants,
  pokeballText
}