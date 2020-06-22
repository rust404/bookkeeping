import React, {useRef} from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const Wrapper = styled.header`
  display: flex;
  position: relative;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #ffd947;
  .center {
    font-size: 20px;
  }
  .left, .right {
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
  }
  .left {
    left: 16px;
  }
  .right {
    right: 16px;
  }
`

interface ITopBarProps extends React.HTMLProps<HTMLElement> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}
const TopBar: React.FC<ITopBarProps> = (props) => {
  const {left, children, right} = props
  const testRef = useRef<any>(null)
  console.log(testRef.current, props)
  testRef.current = props

  return (
    <Wrapper className={classnames(props.className)}>
      <div className="left">{left}</div>
      <div className="center">{children}</div>
      <div className="right">{right}</div>
    </Wrapper>
  )
}

export default React.memo(TopBar)
