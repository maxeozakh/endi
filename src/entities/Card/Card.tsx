import { Text, View } from 'react-native'
interface Props {
  title: string
}
export const Card = (props: Props) => {
  const { title } = props
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}
