import React from 'react'
import { View, StyleSheet } from 'react-native'

interface ContainerProps {
  children: React.ReactNode
  justifyContent?: 'space-between' | 'flex-start' | 'flex-end' | 'center'
}

export const Container: React.FC<ContainerProps> = ({
  children,
  justifyContent = 'space-between',
}) => {
  return <View style={[styles.container, { justifyContent }]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: '100%',
    flexWrap: 'wrap',
    backgroundColor: '#000',
  },
})
