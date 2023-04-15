import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

// import { Container } from '../../entities/Container/Container'
import { getMetrics } from '../../shared/stores/userEntitiesStore'
import { MetricCard } from '../MetricCard/MetricCard'

export const MetricsGallery = () => {
  const metrics = getMetrics()
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={height * 0.7}
        loop
        data={metrics}
        scrollAnimationDuration={700}
        pagingEnabled={false}
        // snapEnabled={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ index }) => (
          <MetricCard index={index} />
          // <View
          //   style={{
          //     flex: 1,
          //     borderWidth: 1,
          //     justifyContent: 'center',
          //   }}>
          //   <Text style={{ textAlign: 'center', fontSize: 30 }}>{index}</Text>
          // </View>
        )}
      />
    </View>
    // <Container>
    //   {metrics.map((metric) => (
    //     <MetricCard metric={metric} />
    //   ))}
    // </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
    alignSelf: 'center',
  },
})
