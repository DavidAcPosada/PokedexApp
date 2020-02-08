import posed from "react-pose";

export const HomeContainer = posed.div({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
})

export const Hero = posed.div({
  enter: {
    y: -10
  },
  exit: {
    y: -50
  }
})

export const Info = posed.div({
  enter: {
    y: 0
  },
  exit: {
    y: 50
  }
})

export const Created = posed.p({
  enter: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: 50,
    opacity: 0
  }
})

export const PlaceholderImage = posed.img({
  enter: {
    rotate: 30,
    opacity: .2,
    x: -50
  },
  exit: {
    rotate: 250,
    opacity: 0,
    x: 0
  }
})
