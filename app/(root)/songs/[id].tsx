import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Song = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
          <Text>Song { id }</Text>
    </View>
  )
}

export default Song