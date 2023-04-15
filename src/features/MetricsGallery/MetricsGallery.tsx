import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import { Button } from '../../entities/Button/Button'
import { Container } from '../../entities/Container/Container'
import { navigationProps } from '../../shared/interfaces'
import { getMetrics } from '../../shared/stores/userEntitiesStore'
import { MetricGalleryCard } from '../MetricGalleryCard/MetricGalleryCard'

export const MetricsGallery = () => {
  const metrics = getMetrics()
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  const navigation = useNavigation<navigationProps>()

  return (
    <Container>
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

      <Button label="Create record" onPress={() => navigation.navigate('Dashboard')} />
    </Container>
  )
}
