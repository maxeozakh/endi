import { useNavigation } from '@react-navigation/native'

export type navigationProps = {
  navigate: (screen: string, params?: unknown) => void
  goBack: () => void
  reset: (index: number, routeNames: string[]) => void
  push: (screen: string, params?: unknown) => void
  getCurrentRoute: () => { name: string }
}
export type RootStackParamList = {
  [Routes.METRIC_DATA]: {
    metricName: string
  }
  [Routes.DASHBOARD]: undefined
  [Routes.SETTINGS]: undefined
  [Routes.TRACK_TAGS]: undefined
  [Routes.TRACK_METRICS]: undefined
  [Routes.ADD_NEW_TAGS_MODAL]: undefined
  [Routes.ADD_NEW_TAGS]: undefined
  [Routes.MANAGE_METRICS]: undefined
  [Routes.MANAGE_TAGS]: undefined
  [Routes.ADD_NEW_METRIC]: undefined
  [Routes.EDIT_METRIC]: undefined
  [Routes.MANAGE_REMINDER]: undefined
  [Routes.WELCOME]: undefined
}

export enum Routes {
  INITIAL = 'dashboard',
  DASHBOARD = 'dashboard',
  SETTINGS = 'settings',
  TRACK_TAGS = 'track tags',
  TRACK_METRICS = 'track metrics',
  METRIC_DATA = 'metric data',
  ADD_NEW_TAGS_MODAL = 'add new tags modal',
  ADD_NEW_TAGS = 'add new tags',
  ADD_NEW_METRIC = 'add new metric',
  MANAGE_METRICS = 'manage metrics',
  EDIT_METRIC = 'edit metric',
  MANAGE_TAGS = 'manage tags',
  EDIT_TAG = 'edit tag',
  MANAGE_REMINDER = 'manage reminder',
  WELCOME = 'welcome',
}

export const useNavigator3000 = () => {
  const navigation = useNavigation<navigationProps>()
  return navigation
}
