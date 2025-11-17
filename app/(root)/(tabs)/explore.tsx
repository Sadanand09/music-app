import {
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

const Explore = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <ScrollView></ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Explore;
