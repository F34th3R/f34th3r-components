import React from 'react'
import PropTypes from 'prop-types'

const ImageContainer = ({ children, image }) => {
  const StyleComponent = {
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  return <div style={StyleComponent}>{children}</div>
}

ImageContainer.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundRepeat: PropTypes.string
}

export { ImageContainer }
