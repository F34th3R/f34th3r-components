import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from './Typography'

const Button = ({
  children,
  disable = false,
  width = '100%',
  height = '48px',
  rounded = '5px',
  background = '#000',
  disableBackground = '#666',
  color = '#fff',
  disableColor,
  margin,
  padding,
  fontSize = '0.875rem',
  fontWeigth,
  onClick
}) => {
  const StyleComponent = {
    width: width,
    height: height,
    background: disable ? disableBackground : background,
    borderRadius: rounded,
    margin: margin,
    padding: padding,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disable ? 'default' : 'pointer'
  }
  return (
    <div style={StyleComponent} onClick={onclick ? null : onClick}>
      <Typography
        fontSize={fontSize}
        fontWeigth={fontWeigth}
        style={{ margin: 'auto' }}
        color={disable ? disableColor : color}
      >
        {children}
      </Typography>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disable: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  rounded: PropTypes.string,
  background: PropTypes.string,
  disableBackground: PropTypes.string,
  color: PropTypes.string,
  disableColor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeigth: PropTypes.string,
  onClick: PropTypes.func
}

export { Button }
