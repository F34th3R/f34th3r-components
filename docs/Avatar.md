# Avatar

### [Go to the main README](https://github.com/F34th3R/f34th3r-components/blob/master/README.md)

## Props
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

## Usage
```js
import { Avatar } from 'f34th3r-components'

render() {
  <Avatar background="#08B1C5" margin="auto" />
}
```

## License

MIT © [F34th3R](https://github.com/F34th3R/f34th3r-components/blob/master/LICENSE)
