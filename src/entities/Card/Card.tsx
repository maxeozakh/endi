import { Text, View } from 'react-native'
interface Props {
  title: string
}
export const Card = (props: Props) => {
  const { title } = props
  return (
    <View>
      <Text style={{ color: 'white' }}>{title}</Text>
    </View>
  )
}
