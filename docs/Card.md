# Card

### [Go to the main README](https://github.com/F34th3R/f34th3r-components/blob/master/README.md)

## Props
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

## Usage
```js
import { Card } from 'f34th3r-components'

render() {
  <Card flexDirection="column" width="300px">
    <Text>Hello world!</Text>
  </Card>
}
```
## License

MIT © [F34th3R](https://github.com/F34th3R/f34th3r-components/blob/master/LICENSE)
