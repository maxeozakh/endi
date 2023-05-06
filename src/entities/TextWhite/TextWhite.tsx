import React from 'react'
import { Text } from 'react-native'

interface TextWhiteProps {
  children?: React.ReactNode
}

export const TextWhite: React.FC<TextWhiteProps> = ({ children }) => {
  return <Text style={{ color: 'white' }}>{children}</Text>
}
