# Text

### [Go to the main README](https://github.com/F34th3R/f34th3r-components/blob/master/README.md)

## Props
| Name            | Type     | Default   | Description                                             |
| --------------- | -------- | --------- | ------------------------------------------------------- |
| children        | `node`   |           | The content of the component.                           |
| classes         | `object` |           | Override or extend the styles applied to the component. |
| fontFamily      | `string` | `Roboto`  | defines the font that is applied to the text.           |
| fontSize        | `string` | `18px`    | Specifies the size, or height, of the text.             |
| fontWeigth      | `string` | `400`     | Sets the weight, or thickness, of the text.             |
| color           | `string` | `#000000` | Define the color of the component.                      |
| variant         | `string` |           | Applies the theme typography styles. <br/>Values: `h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2 | body1 | body2 | caption | overline` |

## Usage
```js
import { Text } from 'f34th3r-components'

render() {
  <Text>Normal</Text>
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
## License

MIT © [F34th3R](https://github.com/F34th3R/f34th3r-components/blob/master/LICENSE)
