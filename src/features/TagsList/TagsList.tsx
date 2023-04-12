import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Container } from '../../entities/Container/Container'
import { Tag } from '../../entities/Tag/Tag'
import { getTags } from '../../shared/stores/userEntitiesStore'

interface TagsListProps {}

export const TagsList: React.FC<TagsListProps> = () => {
  const tags = getTags()
  return (
    <Container>
      <View style={styles.container}>
        {tags.map((tagName, i) => {
          return <Tag key={i} name={tagName} />
        })}
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
