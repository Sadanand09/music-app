import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView>
        <ScrollView>
          <Text>Profile</Text>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Profile