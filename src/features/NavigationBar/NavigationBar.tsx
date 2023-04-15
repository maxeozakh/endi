import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, View } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'

import { navigationProps } from '../../shared/interfaces'
import { COLORS } from '../../shared/ui/constants'

export const NavigationBar = () => {
  const navigation = useNavigation<navigationProps>()
  const ICON_SIZE = 20

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Dashboard')}>
        <View style={styles.iconWrapper}>
          <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 20 20" fill="none">
            <Circle cx="13" cy="7" r="6" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <Circle cx="7" cy="13" r="6" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          </Svg>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Track tags')}>
        <View style={styles.iconWrapper}>
          <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 14 14" fill="none">
            <Path d="M1 7H13" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <Path d="M7 13L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          </Svg>
        </View>
      </Pressable>
      <View style={styles.iconWrapper}>
        <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 18 18" fill="none">
          <Circle cx="9" cy="9" r="3" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          <Path
            d="M7.31201 17.25H7.31189C7.26547 17.25 7.22318 17.2345 7.19187 17.21C7.16098 17.1859 7.14372 17.1558 7.1373 17.1274L7.11248 17.0175L7.05643 16.9197L6.376 15.7324L6.25067 15.5137L6.01871 15.4151C5.56513 15.2223 5.13546 14.9813 4.73753 14.6969L4.53751 14.5539L4.29166 14.5571L2.89051 14.5753L2.78211 14.5767L2.67855 14.6087C2.63559 14.622 2.58872 14.6205 2.54722 14.6049C2.50601 14.5895 2.47651 14.5627 2.45955 14.5342L2.45899 14.5332L0.768783 11.7003C0.752372 11.6718 0.747381 11.6412 0.751985 11.6126C0.756691 11.5833 0.772121 11.5521 0.801195 11.5262L0.886689 11.4499L0.945519 11.3516L1.64356 10.1852L1.77381 9.9676L1.74522 9.71558C1.69148 9.24174 1.69148 8.76365 1.74522 8.28982L1.77373 8.0385L1.64421 7.82125L0.94617 6.65035L0.887075 6.55122L0.800913 6.47445C0.771793 6.4485 0.756342 6.41734 0.751635 6.38801C0.747011 6.35918 0.752081 6.32848 0.768702 6.29982L2.45576 3.46417L2.45584 3.46403C2.4728 3.43552 2.5023 3.40874 2.54351 3.39327C2.58501 3.37768 2.63188 3.3762 2.67484 3.38949L2.78268 3.42285L2.89556 3.423L4.30043 3.4248L4.5417 3.42511L4.7379 3.28468C4.94221 3.13845 5.15343 3.00291 5.36971 2.88094C5.58095 2.76611 5.7977 2.66189 6.01911 2.56902L6.2515 2.47154L6.37788 2.25351L7.05553 1.08441L7.1132 0.984919L7.13841 0.87272C7.14479 0.844315 7.162 0.814228 7.19285 0.7901C7.22406 0.765681 7.26621 0.750104 7.31252 0.75H10.688C10.7344 0.750104 10.7765 0.765682 10.8077 0.7901C10.8386 0.814227 10.8558 0.844313 10.8622 0.872719L10.8912 1.00182L10.9626 1.11319L11.7237 2.2999L11.8478 2.49336L12.0589 2.58409C12.295 2.68552 12.5243 2.79849 12.7446 2.92349L12.7446 2.9235L12.7474 2.92511C12.9523 3.0402 13.1514 3.16699 13.3435 3.304L13.5437 3.44666L13.7894 3.44323L15.1154 3.42473L15.2231 3.42322L15.326 3.39148C15.369 3.37823 15.4158 3.37974 15.4573 3.39533C15.4984 3.41079 15.5279 3.43751 15.5448 3.46597C15.5448 3.46599 15.5448 3.46601 15.5448 3.46603L17.231 6.30012C17.2312 6.30047 17.2314 6.30082 17.2316 6.30117C17.2628 6.35528 17.2554 6.42563 17.1995 6.47546L17.1137 6.55202L17.0547 6.6508L16.3561 7.8208L16.2262 8.03822L16.2548 8.28983C16.3085 8.76366 16.3085 9.24174 16.2548 9.71557L16.2262 9.96718L16.3561 10.1846L17.0547 11.3546L17.1133 11.4529L17.1987 11.5292C17.2561 11.5805 17.2624 11.6507 17.2316 11.7042C17.2314 11.7046 17.2312 11.7049 17.231 11.7053L15.5448 14.5394L15.5447 14.5396C15.5278 14.5681 15.4983 14.5949 15.4571 14.6103C15.4156 14.6259 15.3687 14.6274 15.3257 14.6141L15.2187 14.581L15.1066 14.5806L13.5025 14.5752L13.2606 14.5744L13.0638 14.7151C12.6663 14.9992 12.2371 15.2398 11.7839 15.4323L11.5011 15.5524L11.3838 15.8364L10.9007 17.0064L10.8764 17.0653L10.8623 17.1274C10.8559 17.1558 10.8387 17.1859 10.8078 17.21C10.7766 17.2344 10.7343 17.25 10.688 17.25H7.31201Z"
            stroke="white"
            stroke-width="1.5"
          />
        </Svg>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 30,
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
