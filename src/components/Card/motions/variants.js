export const CardVariants = {
  hover: {
    scale: 1.2,
    borderRadius: 500,
    transition: {
      duration: .3,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  },
  tap: {
    scale: [1, 0.8, 2],
    transition: {
      duration: .2,
      times: [0.1, 0.3, 1],
      ease: 'easeOut',
      stiffness: 20,
      restDelta: 2
    }
  }
}

export const SpriteVariants = {
  hover: {
    scale: 1.3,
    marginTop: 20,
    transition: {
      duration: .3,
      ease: 'easeInOut'
    }
  }
}

export const IdVariants = {
  hover: {
    scale: 0,
    translateY: -20,
    transition: {
      duration: .2,
      ease: 'easeIn'
    }
  }
}

export const NameVariants = {
  hover: {
    fontSize: 16,
    marginTop: -16,
    transition: {
      duration: .2,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}
