import React from 'react'
import {
  Container,
  ContainerActive,
  Description,
  Icon,
  Input
} from './elements.js'

export default class Option extends React.Component {
  render() {
    const { icon, children, onClickOption, isActive } = this.props
    return (
      <React.Fragment>
        <Input
          type="checkbox"
          id={icon}
          onClick={({ target }) => {
            onClickOption(target.id, target.checked)
          }}
        />
        {isActive ? (
          <ContainerActive htmlFor={icon} name={icon} id={icon}>
            <Icon src={`/assets/blueIcons/${icon}.png`} alt={`${icon}`} />
            <Description>{children}</Description>
          </ContainerActive>
        ) : (
          <Container htmlFor={icon} name={icon} id={icon}>
            <Icon src={`/assets/greyIcons/${icon}.png`} alt={`${icon}`} />
            <Description>{children}</Description>
          </Container>
        )}
      </React.Fragment>
    )
  }
}
