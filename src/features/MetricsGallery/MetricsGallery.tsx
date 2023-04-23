import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import { MetricGalleryCard } from '../../entities/MetricGalleryCard/MetricGalleryCard'
import { getUserMetrics } from '../../shared/stores/userEntities'

export const MetricsGallery = () => {
  const metrics = getUserMetrics()
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  return (
    <Carousel
      width={width}
      height={height * 0.7}
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
