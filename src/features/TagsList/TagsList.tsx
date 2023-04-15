import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Tag } from '../../entities/Tag/Tag'
import { getTags } from '../../shared/stores/userEntitiesStore'

interface TagsListProps {}

export const TagsList: React.FC<TagsListProps> = () => {
  const tags = getTags()
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
    justifyContent: 'center',
    width: '400%',
    top: '25%',
    flexWrap: 'wrap',
  },
})
