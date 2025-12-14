import React, { useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import { posters } from "@/constants/posterImages";
import SecondHeader from "@/app/components/common/SecondHeader";

export default function TrackPlayer() {
    const [isLiked, setIsLiked] = useState(false);

  const { title, artist, poster, duration } = useLocalSearchParams<{
    title: string;
    artist: string;
    duration: string;
    poster: keyof typeof posters;
  }>();

  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          //contentContainerStyle={styles.scroll}
        >
          <View className="px-5">
            {/* Top Bar */}
            <View className="flex-1 pt-4">
              <SecondHeader title="Music Player" />
            </View>

            {/* Album Art */}
            <View className="items-center">
              <View className="bg-[#2a2a2a] p-4 rounded-[32px]">
                <Image
                  source={posters[poster]}
                  className="w-[260px] h-[260px] rounded-2xl"
                />
              </View>
            </View>

            {/* Song Info */}
            <View className="items-center mt-8">
              <Text className="text-white text-2xl font-bold">{artist}</Text>
              <Text className="text-white/70 text-base mt-1">
                {title} — Alternative / Indie
              </Text>
            </View>

            {/* Action Buttons */}
            <View className="flex flex-row justify-center gap-10 mt-8">
              <TouchableOpacity
                onPress={() => setIsLiked(!isLiked)}
                className="w-14 h-14 rounded-full border border-white items-center justify-center"
              >
                <Ionicons
                  name={isLiked ? "heart" : "heart-outline"}
                  size={28}
                  color={isLiked ? "#9570E1" : "white"}
                />
              </TouchableOpacity>

              <TouchableOpacity className="w-14 h-14 rounded-full border border-white/40 items-center justify-center">
                <Feather name="share-2" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity className="w-14 h-14 rounded-full border border-white/40 items-center justify-center">
                <Feather name="download" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* Waveform (UI only) */}
            <View className="flex flex-row items-end justify-between mt-10 h-14">
              {Array.from({ length: 28 }).map((_, i) => (
                <View
                  key={i}
                  className={`w-[4px] rounded-full ${
                    i < 6 ? "bg-[#9570E1]" : "bg-white/30"
                  }`}
                  style={{ height: Math.random() * 40 + 10 }}
                />
              ))}
            </View>

            {/* Time */}
            <View className="flex flex-row justify-between mt-3">
              <Text className="text-white/70 text-sm">01:45</Text>
              <Text className="text-white/70 text-sm">{duration}</Text>
            </View>

            {/* Controls */}
            <View className="flex flex-row items-center justify-between mt-10 px-6">
              <Ionicons name="shuffle" size={24} color="white" />
              <Ionicons name="play-skip-back" size={32} color="white" />

              <TouchableOpacity className="w-20 h-20 rounded-full bg-white items-center justify-center">
                <Ionicons name="pause" size={40} color="#111" />
              </TouchableOpacity>

              <Ionicons name="play-skip-forward" size={32} color="white" />
              <Ionicons name="repeat" size={24} color="white" />
            </View>

            {/* Lyrics Bar */}
            <View className="mt-10 bg-white/10 rounded-2xl py-4 items-center">
              <View className="w-16 h-1 bg-white/40 rounded-full mb-2" />
              <Text className="text-white/80 text-sm">
                I, I&apos;ve been trying to fix my pride
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
