import React from 'react'
import { Container, Regular, OptionsContainer } from './elements.js'
import Option from '../Option'
export default class MultiOptionsComponent extends React.Component {
  state = {
    selectedOptions: []
  }
  onClickOption = (id, checked) => {
    if (checked) {
      this.setState({
        selectedOptions: [...this.state.selectedOptions, id]
      })
    } else {
      this.setState({
        selectedOptions: this.state.selectedOptions.filter(
          value => value !== id
        )
      })
    }
  }
  isActive(option) {
    const { selectedOptions } = this.state;

    return selectedOptions.includes(option)
  }
  render() {
    return (
      <Container>
        <Regular>Select one or more options:</Regular>
        <OptionsContainer>
          <Option icon={'musicIcon'} isActive={this.isActive('musicIcon')} onClickOption={this.onClickOption}>
            Play Music
          </Option>
          <Option icon={'lightIcon'} isActive={this.isActive('lightIcon')} onClickOption={this.onClickOption}>
            Do a Performance
          </Option>
          <Option icon={'eyeIcon'}  isActive={this.isActive('eyeIcon')} onClickOption={this.onClickOption}>
            Paint/Design Something
          </Option>
          <Option icon={'heartIcon'}  isActive={this.isActive('heartIcon')} onClickOption={this.onClickOption}>
            Do Something Else
          </Option>
        </OptionsContainer>
      </Container>
    )
  }
}
