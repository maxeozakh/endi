import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Tag } from '../../entities/Tag/Tag'
import { getRecordedTags } from '../../shared/stores/createRecord'
import { getActiveUserTags } from '../../shared/stores/userEntities'

interface TagsListProps {}

export const TagsList: React.FC<TagsListProps> = () => {
  const tagNames = getActiveUserTags()
  const tagsRecord = getRecordedTags()

  return (
    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
      {tagNames.map((tag, i) => {
        const { name } = tag
        const isChosed = tagsRecord.includes(name)
        return <Tag key={i} name={name} isChosed={isChosed} />
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
