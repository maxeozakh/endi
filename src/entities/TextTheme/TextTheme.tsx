import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'

interface TextWhiteProps {
  children?: React.ReactNode
  stylesProp?: any
}

export const TextTheme: React.FC<TextWhiteProps> = ({ children, stylesProp = {} }) => {
  const { colors } = useTheme()

  return (
    <Text style={[{ color: colors.text, fontSize: 16 }, stylesProp && { ...stylesProp }]}>
      {children}
    </Text>
  )
}
