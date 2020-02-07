import React, { Component } from 'react'

import {
  Container,
  Card,
  Spacer,
  Typography,
  Avatar,
  Button
} from 'f34th3r-components'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Spacer height="50px" />
        <Card flexDirection="column" width="300px">
          <Avatar background="#08B1C5" margin="auto" />
          <Spacer height="20px" />
          <Typography>Hola</Typography>
          <Spacer height="20px" />
          <Typography>Hola</Typography>
          <Button
            background="#08B1C5"
            margin="20px 0"
            onClick={() => console.log('hola')}
          >
            Hola
          </Button>
        </Card>
      </Container>
    )
  }
}
