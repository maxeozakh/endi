import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import uuid from 'react-native-uuid'

import { Button } from '../../entities/Button/Button'
import { Container } from '../../entities/Container/Container'
import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { useCreateRecordStore } from '../../shared/stores/createRecord'
import { getUserTagNames, useUserEntitiesStore } from '../../shared/stores/userEntities'
import { toastConfig } from '../../shared/toastConfig'
import { COLORS } from '../../shared/ui/constants'
import { useNavigator3000 } from '../../shared/useNavigator3000'

export const AddNewTagsModal: React.FC = () => {
  const [tags, setTags] = useState('')
  const { addUserTags } = useUserEntitiesStore()
  const { addTagsToTheRecord } = useCreateRecordStore()
  const navigation = useNavigator3000()

  const userTagNames = getUserTagNames()

  const getTagsToSave = () => {
    const newTags = tags.split(',').map((tag) => {
      return { name: tag.trim(), id: uuid.v4() as string, isActive: true }
    })
    const uniqueNewTags = newTags.filter((tag) => tag.name !== '')

    return uniqueNewTags
  }

  const handleSaveTags = () => {
    const tags = getTagsToSave()

    if (tags.find((tag) => userTagNames.includes(tag.name))) {
      return Toast.show({
        type: 'info',
        text1: '',
        text2: 'You already have this tag',
      })
    }

    addUserTags(tags)
    addTagsToTheRecord(tags.map((tag) => tag.name))
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <Container>
        <View style={styles.inputContainer}>
          <TextTheme>add your own tags, separated by commas</TextTheme>
          <TextInput
            autoFocus
            value={tags}
            onChangeText={(tagTitles) => setTags(tagTitles)}
            placeholder={'e.g. "gaming, sleep too much, love"'}
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={handleSaveTags} title="save" />
        </View>
      </Container>
      <Toast config={toastConfig} topOffset={-60} position="top" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    marginTop: 8,
    backgroundColor: COLORS.GRAY_DARK,
    borderRadius: 6,
    color: 'white',
  },
  inputContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
})
