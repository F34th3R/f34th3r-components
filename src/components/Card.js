import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
  children,
  width,
  background = '#fff',
  rounded = '5px',
  margin = 'auto',
  padding = '20px',
  shadow = '0 4px 10px rgba(0, 0, 0, 0.07)',
  flexDirection = 'row',
  alignItems = 'start',
  justifyContent = 'start'
}) => {
  const StyleComponent = {
    width: width,
    background: background,
    borderRadius: rounded,
    margin: margin,
    padding: padding,
    boxShadow: shadow,
    display: 'flex',
    flexDirection: flexDirection,
    alingItems: alignItems,
    justifyContent: justifyContent,
    position: 'relative'
  }
  return <div style={StyleComponent}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  background: PropTypes.string,
  rounded: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  shadow: PropTypes.string,
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string
}

export { Card }
