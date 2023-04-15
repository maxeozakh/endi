import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

import { COLORS } from '../../shared/ui/constants'

interface ButtonProps {
  label: string
  onPress: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  const [isPress, setIsPress] = React.useState(false)

  const touchProps = {
    activeOpacity: 1,
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress,
  }

  return (
    <TouchableHighlight style={styles.container} {...touchProps}>
      {/* <Pressable> */}
      <Text style={styles.text}>{label}</Text>
      {/* </Pressable> */}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {},

  text: {
    fontSize: 16,
    paddingVertical: 14,
    color: '#fff',
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
