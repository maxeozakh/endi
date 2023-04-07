import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AddRecord } from './src/pages/AddRecord'
import { Dashboard } from './src/pages/Dashboard'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
        <Stack.Screen name="Add record" component={AddRecord} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
