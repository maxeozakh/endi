import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import Toast from 'react-native-toast-message'

import { NavigationBar } from './src/features/NavigationBar/NavigationBar'
import { AddNewMetric } from './src/pages/AddNewMetric'
import { AddNewTags } from './src/pages/AddNewTags'
import { Dashboard } from './src/pages/Dashboard'
import { EditMetric } from './src/pages/EditMetric'
import { HorizontalDeathend } from './src/pages/HorizontalDeathend'
import { ManageMetrics } from './src/pages/ManageMetrics'
import { ManageReminder } from './src/pages/ManageReminder'
import { ManageTags } from './src/pages/ManageTags'
import { MetricData } from './src/pages/MetricData'
import { Settings } from './src/pages/Settings'
import { TrackMetrics } from './src/pages/TrackMetrics'
import { TrackTags } from './src/pages/TrackTags'
import { Welcome } from './src/pages/Welcome'
import { getIsWasShown } from './src/shared/stores/littleUserGuide'
import { toastConfig } from './src/shared/toastConfig'
import { UI_THEME } from './src/shared/ui/constants'
import { RootStackParamList, Routes } from './src/shared/useNavigator3000'
import { useReminder } from './src/shared/useReminder'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  const { activateNotification } = useReminder()

  const isUserGuideWasShown = getIsWasShown()
  const initialRouteName = isUserGuideWasShown ? Routes.DASHBOARD : Routes.WELCOME

  useEffect(() => {
    activateNotification()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <NavigationContainer theme={UI_THEME}>
        <HorizontalDeathend />
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen
            name={Routes.WELCOME}
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.DASHBOARD}
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.TRACK_TAGS}
            component={TrackTags}
            options={{ headerBackVisible: false, headerTitle: 'pick tags' }}
          />
          <Stack.Screen
            name={Routes.TRACK_METRICS}
            component={TrackMetrics}
            options={{ headerShown: true, headerTitle: 'estimate metrics' }}
          />
          <Stack.Screen
            name={Routes.METRIC_DATA}
            component={MetricData}
            options={(props) => ({
              headerTitle: props.route.params.metricName,
            })}
          />
          <Stack.Screen name={Routes.ADD_NEW_TAGS} component={AddNewTags} />
          <Stack.Screen
            options={{ presentation: 'modal', headerTitle: 'add new tags' }}
            name={Routes.ADD_NEW_TAGS_MODAL}
            component={AddNewTags}
          />
          <Stack.Screen
            name={Routes.SETTINGS}
            component={Settings}
            options={{
              headerTitle: 'settings',
              headerBackVisible: false,
            }}
          />
          <Stack.Screen name={Routes.MANAGE_METRICS} component={ManageMetrics} />
          <Stack.Screen name={Routes.ADD_NEW_METRIC} component={AddNewMetric} />
          <Stack.Screen name={Routes.EDIT_METRIC} component={EditMetric} />
          <Stack.Screen name={Routes.MANAGE_TAGS} component={ManageTags} />
          <Stack.Screen name={Routes.MANAGE_REMINDER} component={ManageReminder} />
        </Stack.Navigator>
        <NavigationBar />
      </NavigationContainer>
      <Toast config={toastConfig} topOffset={60} position="top" />
    </SafeAreaView>
  )
}
