import React from 'react'
import { View, StyleSheet } from 'react-native'

interface ContainerProps {
  children: React.ReactNode
  justifyContent?: 'space-between' | 'flex-start' | 'flex-end' | 'center'
  flexWrap?: 'wrap' | 'nowrap'
  padding?: number
}

export const Container: React.FC<ContainerProps> = ({
  children,
  justifyContent = 'space-between',
  flexWrap = 'wrap',
  padding = 0,
}) => {
  return <View style={[styles.container, { justifyContent, flexWrap, padding }]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
  },
})
