import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({
  children,
  classes,
  width = '100px',
  height = '100px',
  rounded = '5px',
  margin = '18px',
  background,
  image
}) => {
  const StyleComponent = {
    width: width,
    height: height,
    borderRadius: rounded,
    margin: margin,
    background: background ? background : `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div className={classes} style={StyleComponent}>
      {children}
    </div>
  )
}

Avatar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  rounded: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string
}

export { Avatar }
