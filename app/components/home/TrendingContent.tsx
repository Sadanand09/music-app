import React from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { posters } from "../../../constants/posterImages";

type Song = {
  id: number;
  title: string;
  duration: string;
  artist: string;
  poster: keyof typeof posters;
};

export default function TrendingContent({ data }: { data: Song[] }) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            router.push({
              pathname: "/song/[id]",
              params: {
                id: item.id,
                title: item.title,
                artist: item.artist,
                duration: item.duration,
                poster: item.poster,
              },
            })
          }
        >
          <View className="w-[213px] h-[285px] mr-3 bg-[#434343] rounded-xl p-3">
            <Image
              source={posters[item.poster]}
              className="w-[190px] h-[200px] rounded-xl"
            />
            <Text className="text-white text-xl font-bold mt-3">
              {item.title}
            </Text>
            <Text className="text-[#bdbdbd] text-base mt-1">
              {item.duration} | {item.artist}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
