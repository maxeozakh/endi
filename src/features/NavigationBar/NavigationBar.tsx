import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, View } from 'react-native'

export const NavigationBar = () => {
  const navigation = useNavigation<navigationProps>()

  type navigationProps = {
    navigate: (screen?: string) => void
    goBack: () => void
    reset: (index: number, routeNames: string[]) => void
  }

  return (
    <View style={styles.container}>
      <Button title="dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="new record" onPress={() => navigation.navigate('Add record')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})
