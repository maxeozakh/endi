import { useNavigation } from '@react-navigation/native'

import { navigationProps } from './interfaces'

export const useNavigator3000 = () => {
  const navigation = useNavigation<navigationProps>()
  return { navigation }
}
