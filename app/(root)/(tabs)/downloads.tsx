import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SecondHeader from "@/app/components/common/SecondHeader";

import { songs } from "@/app/data/songs";
import DownloadSongItem from "@/app/components/download/DownloadSongItem";

export default function DownloadsScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <View className="px-5 pt-4 mb-1">
          <View>
            <SecondHeader title="Downloads" />
          </View>

          {/* Banner */}
          <View className="bg-[#4FA28C] rounded-2xl p-5 mb-8 relative overflow-hidden">
            <Text className="text-white text-lg font-bold">
              Your Downloads Music
            </Text>
            <Text className="text-white/80 text-sm mt-2 max-w-[70%]">
              Listen to your music offline that has been downloaded
            </Text>
          </View>

          {/* Section title */}
          <View className="flex flex-row items-center justify-between mb-5">
            <Text className="text-white text-lg font-bold">
              Downloaded Songs
            </Text>
            <Text className="text-[#9570E1] text-sm">See all</Text>
          </View>
        </View>
        <ScrollView className="px-5">
          {/* Songs list */}
          {songs.map((song) => (
            <DownloadSongItem key={song.id} song={song} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
