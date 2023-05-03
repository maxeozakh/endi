import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import { Button } from '../entities/Button/Button'

export const AddNewTags: React.FC = () => {
  const [tags, setTags] = useState('')
  return (
    <View>
      <View>
        <Text style={{ color: 'white' }}>add your own tags, separated by commas</Text>
        <TextInput
          autoFocus
          value={tags}
          onChangeText={(tagTitles) => setTags(tagTitles)}
          placeholder={'e.g. "gaming, sleep too much, love"'}
          style={styles.input}
        />
      </View>
      <Button onPress={() => {}} label="save" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
})
