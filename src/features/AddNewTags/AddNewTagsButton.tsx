import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { COLORS } from '../../shared/ui/constants'
import { Routes, useNavigator3000 } from '../../shared/useNavigator3000'

interface AddNewTagsButtonProps {}

export const AddNewTagsButton: React.FC<AddNewTagsButtonProps> = () => {
  const navigation = useNavigator3000()

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate(Routes.ADD_NEW_TAGS_MODAL)}
        style={styles.addNewTagButton}>
        <Text style={styles.addNewTagButtonText}>+ add new one</Text>
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
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GRAY_MEDIUM,
  },
  addNewTagButtonText: {
    fontSize: 16,
    color: 'white',
  },
})
