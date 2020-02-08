# ImageContainer

### [Go to the main README](https://github.com/F34th3R/f34th3r-components/blob/master/README.md)

## Props
| Name       | Type     | Default | Description                                          |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| children   | `node`   |         | The content of the button.                           |
| classes    | `object` |         | Override or extend the styles applied to the button. |
| width      | `string` | `100px` | The width of the button.                             |
| height     | `string` | `100px` | The height of the button.                            |
| image      | `string` |         | The background of the component.                     |

## Usage
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
