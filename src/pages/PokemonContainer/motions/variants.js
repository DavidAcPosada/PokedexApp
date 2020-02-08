export const TypeIconVariants = {
  hover: {
    scale: 1.1,
    zIndex: 1,
    transition: {
      duration: .3,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 400,
      dump: 4
    }
  }
}

export const TypeIconTextVariants = {
  rest: {
    scale: 0,
    y: -30,
    zIndex: 0
  },
  hover: {
    scale: 1,
    y: 5,
    transition: {
      duration: .3,
      ease: 'easeInOut'
    }
  }
}