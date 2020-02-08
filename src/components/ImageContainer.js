import React from 'react'
import PropTypes from 'prop-types'

const ImageContainer = ({
  children,
  classes,
  image,
  width = '100px',
  height = '100px'
}) => {
  const StyleComponent = {
    width: width,
    height: height,
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div className={classes} style={StyleComponent}>
      {children}
    </div>
  )
}

ImageContainer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export { ImageContainer }
