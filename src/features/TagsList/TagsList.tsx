import React from 'react'

import { Tag } from '../../entities/Tag/Tag'
import { getRecordedTags, getSearchPhrase } from '../../shared/stores/createRecord'
import { getActiveUserTags } from '../../shared/stores/userEntities'

interface TagsListProps {}

export const TagsList: React.FC<TagsListProps> = () => {
  const searchPhrase = getSearchPhrase()
  const tagNames = getActiveUserTags().filter((tag) =>
    tag.name.toLowerCase().includes(searchPhrase)
  )
  const tagsRecord = getRecordedTags()

  return (
    <>
      {tagNames.map((tag, i) => {
        const { name } = tag
        const isChosed = tagsRecord.includes(name)
        return <Tag key={i} name={name} isChosed={isChosed} />
      })}
    </>
  )
}
