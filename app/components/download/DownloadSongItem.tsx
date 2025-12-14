import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { posters } from "@/constants/posterImages";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  song: {
    id: number;
    title: string;
    artist: string;
    duration: string;
    type: string;
    poster: keyof typeof posters;
  };
};

export default function DownloadSongItem({ song }: Props) {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/song/${song.id}`)}
      className="flex flex-row items-center justify-between mb-6"
    >
      {/* Left */}
      <View className="flex flex-row items-center gap-4">
        <Image
          source={posters[song.poster]}
          className="w-14 h-14 rounded-full"
        />

        <View>
          <Text className="text-white text-base font-bold">
            {song.title} – {song.artist}
          </Text>
          <Text className="text-white/60 text-sm mt-1">
            {song.duration} | Genre : {song.type}
          </Text>
        </View>
      </View>

      {/* Play button */}
      <View className="w-10 h-10 rounded-full border border-white/60 items-center justify-center">
        <Ionicons name="play" size={18} color="white" />
      </View>
    </TouchableOpacity>
  );
}
