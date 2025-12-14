import React from "react";
import { FlatList, Image, Text, View } from "react-native";

type Artist = {
  id: number;
  name: string;
  image: any;
};

const artists: Artist[] = [
  {
    id: 1,
    name: "Adele",
    image: require("@/assets/images/artists/adele.jpg"),
  },
  {
    id: 2,
    name: "Ed Sheeran",
    image: require("@/assets/images/artists/ed.jpeg"),
  },
  {
    id: 3,
    name: "The Weeknd",
    image: require("@/assets/images/artists/weeknd.jpeg"),
  },
  {
    id: 4,
    name: "Dua Lipa",
    image: require("@/assets/images/artists/dua.jpeg"),
  },
  {
    id: 5,
    name: "Post Malone",
    image: require("@/assets/images/artists/post.jpg"),
  },
];

export default function ArtistsRow() {
  return (
    <View className="mt-[-100px] mb-5">
      {/* Section Title */}
      <Text className="text-white text-xl font-bold mb-4">Popular Artists</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={artists}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-4"
        renderItem={({ item }) => (
          <View className="items-center">
            <Image
              source={item.image}
              className="w-28 h-28 rounded-full border-2 border-[#9570E1]"
            />
            <Text className="text-white text-base font-medium mt-2">
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
