import React, { Component } from 'react'

import {
  Container,
  Card,
  Spacer,
  Text,
  Avatar,
  Button
} from 'f34th3r-components'
import { TextPage } from './pages/TextPage'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Spacer height="50px" />
        <Card flexDirection="column" width="300px">
          <Avatar background="#08B1C5" margin="auto" />
          <Spacer height="20px" />
          <Text>Hola</Text>
          <Spacer height="20px" />
          <Text>Hola</Text>
          <Button
            background="#08B1C5"
            margin="20px 0"
            onClick={() => console.log('hola')}
          >
            Hola
          </Button>
        </Card>
        <Spacer height="50px" />
        <Card flexDirection="column" width="300px">
          <Button
            background="#08B1C5"
            margin="20px 0"
            onClick={() => console.log('hola')}
          >
            Hola
          </Button>
        </Card>
        <Spacer height="50px" />
        <TextPage />
        <Spacer height="50px" />
      </Container>
    )
  }
}
