import * as Haptics from 'expo-haptics'
import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'

interface TagProps {
  name: string
}
export const Tag = (props: TagProps) => {
  const { name } = props
  const [isActive, setIsActive] = React.useState(false)
  const backgroundColor = isActive ? '#000' : '#fff'
  const color = isActive ? '#fff' : '#000'
  const handleOnPress = () => {
    setIsActive(!isActive)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

  return (
    <Pressable onPress={handleOnPress} style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color }]}>{name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '0.4s',
    transitionProperty: 'background-color',
  },
  text: {
    color: '#000',
  },
})
