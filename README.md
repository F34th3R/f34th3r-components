# f34th3r-components

> My most used components 💃🏼📦

[![NPM](https://img.shields.io/npm/v/f34th3r-components.svg)](https://www.npmjs.com/package/f34th3r-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i f34th3r-components
```

# Components
- [Card](https://github.com/F34th3R/f34th3r-components#card)
- [Text](https://github.com/F34th3R/f34th3r-components#text)
- [Container](https://github.com/F34th3R/f34th3r-components#container)
- [Spacer](https://github.com/F34th3R/f34th3r-components#spacer)
- [Avatar](https://github.com/F34th3R/f34th3r-components#avatar)
- [Button](https://github.com/F34th3R/f34th3r-components#button)
- [imagecontainer](https://github.com/F34th3R/f34th3r-components#imagecontainer)

Card
======
##### [Go to components](https://github.com/F34th3R/f34th3r-components#components)
#### Props
| Name            | Type     | Default                          | Description                                             |
| --------------- | -------- | -------------------------------- | ------------------------------------------------------- |
| children        | `node`   |                                  | The content of the component.                           |
| classes         | `object` |                                  | Override or extend the styles applied to the component. |
| width           | `string` |                                  | The width of the component.                             |
| background      | `string` | `#ffffff`                        | The background of the component.                        |
| rounded         | `string` | `5px`                            | Rounded corners.                                        |
| margin          | `string` | `auto`                           | The margin of the component.                            |
| padding         | `string` | `20px`                           | The padding of the component.                           |
| shadow          | `string` | `0 4px 10px rgba(0, 0, 0, 0.07)` | The values of the box-shadow. `0px` to disable.         |
| flexDirection   | `string` | `row`                            | This establishes the main-axis. <br/>Values: `row | row-reverse | column | column-reverse`
| justifyContent  | `string` | `start`                          | This defines the alignment along the main axis. <br/>Values:  `flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right| unsafe`|

#### Usage
```js
import { Card } from 'f34th3r-components'

render() {
  <Card flexDirection="column" width="300px">
    // your content
  </Card>
}
```

Text
======
##### [Go to components](https://github.com/F34th3R/f34th3r-components#components)
#### Props
| Name            | Type     | Default   | Description                                             |
| --------------- | -------- | --------- | ------------------------------------------------------- |
| children        | `node`   |           | The content of the component.                           |
| classes         | `object` |           | Override or extend the styles applied to the component. |
| fontFamily      | `string` | `Roboto`  | defines the font that is applied to the text.           |
| fontSize        | `string` | `18px`    | Specifies the size, or height, of the text.             |
| fontWeigth      | `string` | `400`     | Sets the weight, or thickness, of the text.             |
| color           | `string` | `#000000` | Define the color of the component.                      |
| variant         | `string` |           | Applies the theme typography styles. <br/>Values: `h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2 | body1 | body2 | caption | overline` |

#### Usage
```js
import { Text } from 'f34th3r-components'

render() {
  <Text>
    // your content
  </Text>

  <Text variant="h1">h1. Heading</Text>

  <Text variant="h2">h2. Heading</Text>

  <Text variant="h3">h3. Heading</Text>

  <Text variant="h4">h4. Heading</Text>

  <Text variant="h5">h5. Heading</Text>

  <Text variant="h6">h6. Heading</Text>

  <Text variant="subtitle1">
    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Quos blanditiis tenetur
  </Text>

  <Text variant="subtitle2">
    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Quos blanditiis tenetur
  </Text>

  <Text variant="body1">
    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore
    consectetur, neque doloribus, cupiditate numquam dignissimos laborum
    fugiat deleniti? Eum quasi quidem quibusdam.
  </Text>

  <Text variant="body2">
    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore
    consectetur, neque doloribus, cupiditate numquam dignissimos laborum
    fugiat deleniti? Eum quasi quidem quibusdam.
  </Text>

  <Text variant="caption">caption text</Text>

  <Text variant="OVERLINE">Overline Text</Text>
}
```

Container
======
##### [Go to components](https://github.com/F34th3R/f34th3r-components#components)
#### Props
| Name            | Type     | Default  | Description                                             |
| --------------- | -------- | -------- | ------------------------------------------------------- |
| children        | `node`   |          | The content of the component.                           |
| classes         | `object` |          | Override or extend the styles applied to the component. |
| maxWidth        | `string` | `920px`  | Used to set the maximum width of the container.         |
| padding         | `string` | `0 18px` | defines the innermost portion of the container.         |

#### Usage
```js
import { Container } from 'f34th3r-components'

render() {
  <Container>
    // your content
  </Container>
}
```

Spacer
======
##### [Go to components](https://github.com/F34th3R/f34th3r-components#components)
#### Props
| Name            | Type     | Default | Description                   |
| --------------- | -------- | ------- | ----------------------------- |
| children        | `node`   |         | The content of the component. |
| width           | `string` |         | The width of the component.   |
| height          | `string` |         | The height of the component.  |

#### Usage
```js
import { Spacer } from 'f34th3r-components'

render() {
  <Spacer height="20px" />
}
```

Avatar
======
##### [Go to components](https://github.com/F34th3R/f34th3r-components#components)
#### Props
| Name            | Type     | Default | Description                                                        |
| --------------- | -------- | ------- | ------------------------------------------------------------------ |
| children        | `node`   |         | The content of the component.                                      |
| classes         | `object` |         | Override or extend the styles applied to the component.            |
| width           | `string` | `100px` | The width of the component.                                        |
| height          | `string` | `100px` | The height of the component.                                       |
| rounded         | `string` | `5px`   | Rounded corners.                                                   |
| margin          | `string` | `18px`  | The margin of the component.                                       |
| background      | `string` |         | The background of the component, if you don't want to use a image. |
| image           | `string` |         | The Image of the avatar.                                           |
#### Usage
```js
import { Avatar } from 'f34th3r-components'

render() {
  <Avatar background="#08B1C5" margin="auto" />
}
```

Button
======
##### [Go to components](https://github.com/F34th3R/f34th3r-components#components)
#### Props
| Name              | Type     | Default    | Description                                          |
| ----------------- | -------- | ---------- | ---------------------------------------------------- |
| children          | `node`   |            | The content of the button.                           |
| classes           | `object` |            | Override or extend the styles applied to the button. |
| disable           | `bool`   |            | Sets the state of the button.                        |
| width             | `string` | `100%`     | The width of the button.                             |
| height            | `string` | `48px`     | The height of the button.                            |
| rounded           | `string` | `5px`      | Rounded corners.                                     |
| background        | `string` | `#000000`  | The background of the button.                        |
| disableBackground | `string` | `#666666`  | The background of the button when is disable.        |
| color             | `string` | `#ffffff`  | Define the color of the component.                   |
| disableColor      | `string` |            | The background of the button when is disable.        |
| margin            | `string` |            | The margin of the button.                            |
| padding           | `string` |            | The padding of the component.                        |
| fontSize          | `string` | `0.875rem` | Specifies the size, or height, of the text.          |
| fontWeigth        | `string` |            | Sets the weight, or thickness, of the text.          |
| onClick           | `func`   |            | Sets function of the handlerClick.                   |
#### Usage
```js
import { Button } from 'f34th3r-components'

render() {
  <Button
    background="#08B1C5"
    margin="20px 0"
    onClick={() => console.log('Hello 💃🏼')}
  >
    Hello 💃🏼
  </Button>
}
```

ImageContainer
======
##### [Go to components](https://github.com/F34th3R/f34th3r-components#components)
#### Props
| Name       | Type     | Default | Description                                          |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| children   | `node`   |         | The content of the button.                           |
| classes    | `object` |         | Override or extend the styles applied to the button. |
| width      | `string` | `100px` | The width of the button.                             |
| height     | `string` | `100px` | The height of the button.                            |
| image      | `string` |         | The background of the component.                     |
#### Usage
```js
import { ImageContainer } from 'f34th3r-components'

render() {
  <ImageContainer
    image={/* url or path */}
    width="400px"
    height="300px"
  />
}
```

## License

MIT © [F34th3R](https://github.com/F34th3R/f34th3r-components/blob/master/LICENSE)
