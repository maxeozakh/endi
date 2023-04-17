import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Tag } from '../../entities/Tag/Tag'
import { getUserTags } from '../../shared/stores/userEntities'

interface TagsListProps {}

export const TagsList: React.FC<TagsListProps> = () => {
  const tags = getUserTags()
  return (
    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
      {tags.map((tagName, i) => {
        return <Tag key={i} name={tagName} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '400%',
    top: '25%',
    flexWrap: 'wrap',
  },
})
