import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({
  children,
  fontFamily = 'Roboto',
  fontSize = '18px',
  fontWeigth = '400',
  color = '#000'
}) => {
  const StyleComponent = {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeigth: fontWeigth,
    color: color
  }
  return <div style={StyleComponent}>{children}</div>
}

Typography.propTypes = {
  children: PropTypes.node,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeigth: PropTypes.string,
  color: PropTypes.string
}

export { Typography }
