import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NavigationBar } from './src/features/NavigationBar/NavigationBar'
import { Dashboard } from './src/pages/Dashboard'
import { TrackMetrics } from './src/pages/TrackMetrics'
import { TrackTags } from './src/pages/TrackTags'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
        <Stack.Screen name="Track tags" component={TrackTags} options={{ headerShown: true }} />
        <Stack.Screen
          name="Track metrics"
          component={TrackMetrics}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
      <NavigationBar />
    </NavigationContainer>
  )
}
