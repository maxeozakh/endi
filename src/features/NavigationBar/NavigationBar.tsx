import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, View } from 'react-native'

import { navigationProps } from '../../shared/interfaces'

export const NavigationBar = () => {
  const navigation = useNavigation<navigationProps>()

  return (
    <View style={styles.container}>
      <Button title="dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="new record" onPress={() => navigation.navigate('Track tags')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    color: '#fff',
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})
