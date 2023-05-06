import { StyleSheet, View } from 'react-native'

import { NavigationButton } from '../../entities/NavigationButton/NavigationButton'
import { COLORS } from '../../shared/ui/constants'
import { Routes } from '../../shared/useNavigator3000'

export const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <NavigationButton route={Routes.DASHBOARD} />
      <NavigationButton route={Routes.TRACK_TAGS} />
      <NavigationButton route={Routes.SETTINGS} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  iconWrapper: {
    backgroundColor: COLORS.GRAY_DARK,
    borderRadius: 50,
    padding: 16,
  },
})
