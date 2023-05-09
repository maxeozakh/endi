import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'

import { COLORS } from '../../shared/ui/constants'
import { TextTheme } from '../TextTheme/TextTheme'

interface ButtonProps {
  title?: string
  onPress: () => void
  children?: React.ReactNode
  fontSize?: number
  stylesProp?: Record<string, unknown>
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  children,
  fontSize,
  stylesProp = {},
}) => {
  const [isPress, setIsPress] = React.useState(false)

  const touchProps = {
    activeOpacity: 1,
    style: isPress ? { ...styles.btnPress, ...stylesProp } : { ...styles.btnNormal, ...stylesProp }, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress,
  }

  return (
    <TouchableHighlight style={styles.container} {...touchProps}>
      <TextTheme stylesProp={styles.text}>{children || title}</TextTheme>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    paddingVertical: 14,
  },
  btnNormal: {
    backgroundColor: COLORS.GRAY_DARK,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  btnPress: {
    width: '100%',
    backgroundColor: COLORS.GRAY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
})
