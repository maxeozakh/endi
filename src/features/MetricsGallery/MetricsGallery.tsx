import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import { MetricGalleryCard } from '../../entities/MetricGalleryCard/MetricGalleryCard'
import { getActiveUserMetrics } from '../../shared/stores/userEntities'

export const MetricsGallery = () => {
  const metrics = getActiveUserMetrics()
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  return (
    <Carousel
      width={width}
      height={height * 0.65}
      loop
      data={metrics}
      vertical={false}
      scrollAnimationDuration={700}
      pagingEnabled={false}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
      renderItem={({ index }) => <MetricGalleryCard index={index} />}
    />
  )
}
