import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

import { COLORS } from '../../shared/ui/constants'
import { Routes, useNavigator3000 } from '../../shared/useNavigator3000'

interface AddNewTagsButtonProps {}

export const AddNewTagsButton: React.FC<AddNewTagsButtonProps> = () => {
  const navigation = useNavigator3000()

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate(Routes.ADD_NEW_TAGS_MODAL)}
      style={styles.addNewTagButton}>
      <Text style={styles.addNewTagButtonText}>+ add new one</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  addNewTagButton: {
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GRAY_MEDIUM,
  },
  addNewTagButtonText: {
    fontSize: 16,
    color: 'white',
  },
})
