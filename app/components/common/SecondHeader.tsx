import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";

type Props = {
  title: string;
};

export default function SecondHeader({ title }: Props) {
  return (
    <View className="flex flex-row items-center justify-between mb-3">
      {/* Back */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="w-12 h-12 rounded-full border border-white/40 items-center justify-center"
      >
        <Ionicons name="arrow-back" size={22} color="white" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-white text-xl font-bold">{title}</Text>

      {/* More */}
      <TouchableOpacity className="w-12 h-12 rounded-full border border-white/40 items-center justify-center">
        <Feather name="more-horizontal" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}
