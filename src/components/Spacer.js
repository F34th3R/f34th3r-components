import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({ children, width, height }) => {
  const StyleComponent = {
    width: width,
    height: height
  }
  return <div style={StyleComponent}>{children}</div>
}

Spacer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}

export { Spacer }
