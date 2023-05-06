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
}

export enum Routes {
  INITIAL = 'Dashboard',
  DASHBOARD = 'Dashboard',
  SETTINGS = 'Settings',
  TRACK_TAGS = 'Track tags',
  TRACK_METRICS = 'Track metrics',
  METRIC_DATA = 'Metric data',
  ADD_NEW_TAGS_MODAL = 'Add new tags modal',
  ADD_NEW_TAGS = 'Add new tags',
  ADD_NEW_METRIC = 'Add new metric',
  MANAGE_METRICS = 'Manage metrics',
  EDIT_METRIC = 'Edit metric',
  MANAGE_TAGS = 'Manage tags',
  EDIT_TAG = 'Edit tag',
}

export const useNavigator3000 = () => {
  const navigation = useNavigation<navigationProps>()
  return navigation
}
