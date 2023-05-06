import { Easing } from 'react-native-reanimated'

export const COLORS = {
  GRAY_DARK: '#1E1E1E',
  GRAY_MEDIUM: '#616161',
  GRAY_LIGHT: '#8e8e8e',
  RED_LIGHT: '#FF005C',
  GREEN_LIGHT: '#21FF52',
}

export const ANIMATION_CONFIG = {
  duration: 150,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
}

export const UI_THEME = {
  dark: true,
  colors: {
    primary: 'white',
    background: '#000',
    card: '#000',
    text: 'white',
    border: '#f3f3f3',
    notification: '#000',
  },
}
