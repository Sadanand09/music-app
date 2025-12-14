import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SavedSongs() {
  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center px-6">
          {/* GIF / Illustration */}
          <Image
            source={require("../../../assets/gifs/empty-music.gif")}
            className="w-64 h-64 mb-6"
            resizeMode="contain"
          />

          {/* Title */}
          <Text className="text-white text-2xl font-bold text-center">
            No Saved Songs Yet
          </Text>

          {/* Subtitle */}
          <Text className="text-white/60 text-base text-center mt-3 leading-6">
            You haven’t liked any songs yet.
            {"\n"}Tap the ❤️ icon to save your favorites.
          </Text>

          {/* Accent line */}
          <View className="mt-6 w-20 h-1 rounded-full bg-[#9570E1]" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
