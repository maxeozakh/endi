import React from 'react'

import { Tag } from '../../entities/Tag/Tag'
import { getRecordedTags } from '../../shared/stores/createRecord'
import { getActiveUserTags } from '../../shared/stores/userEntities'

interface TagsListProps {}

export const TagsList: React.FC<TagsListProps> = () => {
  const tagNames = getActiveUserTags()
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
