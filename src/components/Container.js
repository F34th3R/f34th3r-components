import React from 'react'
import PropTypes from 'prop-types'

const Container = ({
  children,
  classes,
  maxWidth = '920px',
  padding = '0 18px'
}) => {
  const StyleComponent = {
    maxWidth: maxWidth,
    margin: 'auto',
    padding: padding,
    position: 'relative'
  }
  return (
    <div className={classes} style={StyleComponent}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  maxWidth: PropTypes.string,
  padding: PropTypes.string
}

export { Container }
