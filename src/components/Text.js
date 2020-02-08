import React from 'react'
import PropTypes from 'prop-types'

const Text = ({
  children,
  classes,
  fontFamily = 'Roboto',
  fontSize,
  fontWeight,
  color = '#000',
  lineHeight,
  letterSpacing,
  variant
}) => {
  const variantValues = () => {
    switch (variant) {
      case 'h1':
        fontSize = '6rem'
        fontWeight = '300'
        lineHeight = '1.167'
        letterSpacing = '-0.01562em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'h2':
        fontSize = '3.75rem'
        fontWeight = '300'
        lineHeight = '1.2'
        letterSpacing = '-0.00833em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'h3':
        fontSize = '3rem'
        fontWeight = '400'
        lineHeight = '1.167'
        letterSpacing = '0em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'h4':
        fontSize = '2.125rem'
        fontWeight = '400'
        lineHeight = '1.235'
        letterSpacing = '0.00735em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'h5':
        fontSize = '1.5rem'
        fontWeight = '400'
        lineHeight = '1.334'
        letterSpacing = '0em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'h6':
        fontSize = '1.25rem'
        fontWeight = '500'
        lineHeight = '1.6'
        letterSpacing = '0.0075em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'subtitle1':
        fontSize = '1rem'
        fontWeight = '400'
        lineHeight = '1.75'
        letterSpacing = '0.00938em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'subtitle2':
        fontSize = '0.875rem'
        fontWeight = '500'
        lineHeight = '1.57'
        letterSpacing = '0.00714em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'body1':
        fontSize = '1rem'
        fontWeight = '400'
        lineHeight = '1.5'
        letterSpacing = '0.00938em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'body2':
        fontSize = '0.875rem'
        fontWeight = '400'
        lineHeight = '1.43'
        letterSpacing = '0.01071em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'caption':
        fontSize = '0.75rem'
        fontWeight = '400'
        lineHeight = '1.66'
        letterSpacing = '0.03333em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      case 'overline':
        fontSize = '0.75rem'
        fontWeight = '400'
        lineHeight = '2.66'
        letterSpacing = '0.08333em'
        return { fontSize, fontWeight, lineHeight, letterSpacing }

      default:
        fontSize = '18px'
        fontWeight = '400'
        return { fontSize, fontWeight, lineHeight, letterSpacing }
    }
  }
  const StyleComponent = {
    fontFamily: fontFamily,
    fontSize: variantValues().fontSize,
    fontWeight: variantValues().fontWeight,
    color: color,
    lineHeight: variantValues().lineHeight,
    letterSpacing: variantValues().letterSpacing,
    textTransform: variant ? 'uppercase' : null
  }
  return (
    <div className={classes} style={StyleComponent}>
      {children}
    </div>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  variant: PropTypes.string
}

export { Text }
