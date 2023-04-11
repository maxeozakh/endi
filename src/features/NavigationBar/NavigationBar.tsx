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
      <Button title="PLUS" onPress={() => navigation.navigate('Add record')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
