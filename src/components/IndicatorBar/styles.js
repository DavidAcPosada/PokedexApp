import styled from 'styled-components'

export const Indicator = styled.div`
  width: 100%;
  background: #ddd;
  height: 15px;
  border-radius: 20px;
`

export const Progress = styled.div`
  width: ${({ progress }) => `${progress > 100 ? 100 : progress}%`};
  background: ${({ progress }) => progress <= 50 ? '#E8565C' : progress < 70 ? '#FFA35E' : '#BEEB9F'};
  height: 15px;
  border-radius: 20px;
  font-size: 10px;
  line-height: 15px;
  color: #fff;
  text-align: center;
`