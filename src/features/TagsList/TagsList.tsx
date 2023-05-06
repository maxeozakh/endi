import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Tag } from '../../entities/Tag/Tag'
import { getRecordedTags } from '../../shared/stores/createRecord'
import { getUserTagNames } from '../../shared/stores/userEntities'

interface TagsListProps {}

export const TagsList: React.FC<TagsListProps> = () => {
  const tagNames = getUserTagNames()
  const tagsRecord = getRecordedTags()

  return (
    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
      {tagNames.map((tagName, i) => {
        const isChosed = tagsRecord.includes(tagName)
        return <Tag key={i} name={tagName} isChosed={isChosed} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '400%',
    flexWrap: 'wrap',
  },
})
