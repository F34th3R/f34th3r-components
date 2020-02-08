# Button

### [Go to the main README](https://github.com/F34th3R/f34th3r-components/blob/master/README.md)

## Props
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

## Usage
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

## License

MIT © [F34th3R](https://github.com/F34th3R/f34th3r-components/blob/master/LICENSE)
