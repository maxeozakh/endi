import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import Toast from 'react-native-toast-message'

import { NavigationBar } from './src/features/NavigationBar/NavigationBar'
import { AddNewTags } from './src/pages/AddNewTags'
import { Dashboard } from './src/pages/Dashboard'
import { MetricData } from './src/pages/MetricData'
import { TrackMetrics } from './src/pages/TrackMetrics'
import { TrackTags } from './src/pages/TrackTags'
import { RootStackParamList, Routes } from './src/shared/interfaces'
import { toastConfig } from './src/shared/toastConfig'

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: 'white',
            background: '#000',
            card: '#000',
            text: 'white',
            border: '#f3f3f3',
            notification: '#000',
          },
        }}>
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.DASHBOARD}
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.TRACK_TAGS}
            component={TrackTags}
            options={{ headerShown: false, headerTitle: 'Record tags' }}
          />
          <Stack.Screen
            name={Routes.TRACK_METRICS}
            component={TrackMetrics}
            options={{ headerShown: true, headerTitle: 'Record metrics' }}
          />
          <Stack.Screen
            name={Routes.METRIC_DATA}
            component={MetricData}
            options={(props) => ({
              headerTitle: props.route.params.metricName,
            })}
          />
          <Stack.Screen
            options={{ presentation: 'modal' }}
            name={Routes.ADD_NEW_TAGS}
            component={AddNewTags}
          />
        </Stack.Navigator>
        <NavigationBar />
      </NavigationContainer>
      <Toast config={toastConfig} topOffset={60} position="top" />
    </SafeAreaView>
  )
}
