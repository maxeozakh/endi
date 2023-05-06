import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import Toast from 'react-native-toast-message'

import { NavigationBar } from './src/features/NavigationBar/NavigationBar'
import { AddNewMetric } from './src/pages/AddNewMetric'
import { AddNewTags } from './src/pages/AddNewTags'
import { Dashboard } from './src/pages/Dashboard'
import { EditMetric } from './src/pages/EditMetric'
import { ManageMetrics } from './src/pages/ManageMetrics'
import { ManageTags } from './src/pages/ManageTags'
import { MetricData } from './src/pages/MetricData'
import { Settings } from './src/pages/Settings'
import { TrackMetrics } from './src/pages/TrackMetrics'
import { TrackTags } from './src/pages/TrackTags'
import { toastConfig } from './src/shared/toastConfig'
import { UI_THEME } from './src/shared/ui/constants'
import { RootStackParamList, Routes } from './src/shared/useNavigator3000'

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <NavigationContainer theme={UI_THEME}>
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.DASHBOARD}
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.TRACK_TAGS}
            component={TrackTags}
            options={{ headerBackVisible: false, headerTitle: 'Pick tags' }}
          />
          <Stack.Screen
            name={Routes.TRACK_METRICS}
            component={TrackMetrics}
            options={{ headerShown: true, headerTitle: 'Estimate metrics' }}
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
            options={{ presentation: 'modal', headerTitle: 'Add new tags' }}
            name={Routes.ADD_NEW_TAGS_MODAL}
            component={AddNewTags}
          />
          <Stack.Screen
            name={Routes.SETTINGS}
            component={Settings}
            options={{
              headerBackVisible: false,
            }}
          />
          <Stack.Screen name={Routes.MANAGE_METRICS} component={ManageMetrics} />
          <Stack.Screen name={Routes.ADD_NEW_METRIC} component={AddNewMetric} />
          <Stack.Screen name={Routes.EDIT_METRIC} component={EditMetric} />
          <Stack.Screen name={Routes.MANAGE_TAGS} component={ManageTags} />
        </Stack.Navigator>
        <NavigationBar />
      </NavigationContainer>
      <Toast config={toastConfig} topOffset={60} position="top" />
    </SafeAreaView>
  )
}
