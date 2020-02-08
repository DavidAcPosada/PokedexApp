import React from 'react'
import { Indicator, Progress } from './styles'

export default ({ value }) => {
  return (
    <Indicator>
      <Progress progress={value}>{value}</Progress>
    </Indicator>
  )
}
