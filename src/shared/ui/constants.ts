import { Easing } from 'react-native-reanimated'

export const COLORS = {
  GRAY_DARK: '#1E1E1E',
  GRAY_MEDIUM: '#616161',
  GRAY_LIGHT: '#8e8e8e',
}

export const ANIMATION_CONFIG = {
  duration: 150,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
}
