import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { Button } from '../../entities/Button/Button'
import { Container } from '../../entities/Container/Container'
import { AddNewTagsButton } from '../../features/AddNewTags/AddNewTagsButton'
import { TagsList } from '../../features/TagsList/TagsList'
import { useCreateRecordStore } from '../../shared/stores/createRecord'
import { COLORS } from '../../shared/ui/constants'
import { Routes, useNavigator3000 } from '../../shared/useNavigator3000'

export const TrackTags = () => {
  const navigation = useNavigator3000()
  const { setSearchPhrase } = useCreateRecordStore()

  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          onChangeText={(text) => setSearchPhrase(text.toLowerCase())}
          style={styles.input}
          placeholder="search"
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <AddNewTagsButton />
        <TagsList />
      </ScrollView>
      <Button
        stylesProp={styles.button}
        title="estimate metrics"
        onPress={() => navigation.push(Routes.TRACK_METRICS)}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 8,
    backgroundColor: COLORS.GRAY_DARK,
    fontSize: 16,
    borderRadius: 6,
    color: 'white',
    marginBottom: 16,
  },
})
