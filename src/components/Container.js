import React from 'react'

export const Container = ({
  children,
  maxWidth = '920px',
  padding = '0 18px'
}) => {
  const StyleComponent = {
    maxWidth: maxWidth,
    margin: 'auto',
    padding: padding,
    position: 'relative'
  }
  return <div style={StyleComponent}>{children}</div>
}
