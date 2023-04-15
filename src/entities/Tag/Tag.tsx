import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'

import { COLORS } from '../../shared/ui/constants'

interface TagProps {
  name: string
}
export const Tag = (props: TagProps) => {
  const { name } = props
  const [isActive, setIsActive] = React.useState(false)
  const backgroundColor = isActive ? '#fff' : COLORS.GRAY_DARK
  const color = isActive ? '#000' : '#fff'
  const handleOnPress = () => {
    setIsActive(!isActive)
  }

  return (
    <Pressable onPress={handleOnPress} style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color }]}>{name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '0.4s',
    transitionProperty: 'background-color',
  },
  text: {
    fontSize: 34,
    color: '#000',
  },
})
