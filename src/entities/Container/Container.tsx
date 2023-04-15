import { View, StyleSheet } from 'react-native'

export const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
