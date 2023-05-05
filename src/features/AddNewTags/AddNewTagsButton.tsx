import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { navigationProps, Routes } from '../../shared/interfaces'
import { COLORS } from '../../shared/ui/constants'

interface AddNewTagsButtonProps {}

export const AddNewTagsButton: React.FC<AddNewTagsButtonProps> = () => {
  const navigation = useNavigation<navigationProps>()

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate(Routes.ADD_NEW_TAGS)}
        style={styles.addNewTagButton}>
        <Text style={styles.addNewTagButtonText}>+</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  addNewTagButton: {
    marginTop: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.GRAY_DARK,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNewTagButtonText: {
    fontSize: 34,
    color: 'white',
    lineHeight: 38,
  },
})
