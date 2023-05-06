import { Easing } from 'react-native-reanimated'

export const COLORS = {
  GRAY_DARK: '#1E1E1E',
  GRAY_MEDIUM: '#616161',
  GRAY_LIGHT: '#8e8e8e',
  RED_LIGHT: '#FF005C',
  GREEN_LIGHT: '#21FF52',
  YELLOW_MEDIUM: '#F5DB5E',
  PINK_LIGHT: '#E7BDCA',
  BLUE_MEDIUM: '#5A86E9',
  RED_MEDIUM: '#F37B56',
  VIOLET_MEDIUM: '#7C5BD5',
  VIOLET_LIGHT: '#B296FF',
  GREEN_MEDIUM: '#74B879',
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
