import { StyleSheet } from 'react-native'
import { BaseToast, ErrorToast } from 'react-native-toast-message'

import { COLORS } from './ui/constants'

export const toastConfig = {
  info: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftWidth: 0,
        borderRadius: 8,
        width: '98%',
        backgroundColor: COLORS.GRAY_DARK,
      }}
      contentContainerStyle={styles.infoContainer}
      text1Style={styles.infoToastText}
      text2Style={styles.infoToastText}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
}

const styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  infoToastText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
})
