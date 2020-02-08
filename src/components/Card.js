import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
  children,
  classes,
  width,
  background = '#fff',
  rounded = '5px',
  margin = 'auto',
  padding = '20px',
  shadow = '0 4px 10px rgba(0, 0, 0, 0.07)',
  flexDirection = 'row',
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
    justifyContent: justifyContent,
    position: 'relative'
  }
  return (
    <div className={classes} style={StyleComponent}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  width: PropTypes.string,
  background: PropTypes.string,
  rounded: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  shadow: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string
}

export { Card }
