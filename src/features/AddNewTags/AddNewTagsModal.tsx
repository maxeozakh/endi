import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'

import { Button } from '../../entities/Button/Button'
import { Container } from '../../entities/Container/Container'
import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { useCreateRecordStore } from '../../shared/stores/createRecord'
import { getUserTags, useUserEntitiesStore } from '../../shared/stores/userEntities'
import { COLORS } from '../../shared/ui/constants'
import { useNavigator3000 } from '../../shared/useNavigator3000'

export const AddNewTagsModal: React.FC = () => {
  const [tags, setTags] = useState('')
  const { addUserTags } = useUserEntitiesStore()
  const { addTagsToTheRecord } = useCreateRecordStore()
  const navigation = useNavigator3000()

  const userTags = getUserTags()

  const getUniqueTagsToSave = () => {
    const newTags = tags.split(',').map((tag) => tag.trim())
    const uniqueNewTags = newTags
      .filter((tag) => !userTags.includes(tag))
      .filter((tag) => tag !== '')

    return uniqueNewTags
  }

  const handleSaveTags = () => {
    const tags = getUniqueTagsToSave()
    addUserTags(tags)
    addTagsToTheRecord(tags)
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
          <Button onPress={handleSaveTags} label="save" />
        </View>
      </Container>
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
