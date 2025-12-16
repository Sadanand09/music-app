import React from "react";
import { ScrollView, Text, View } from "react-native";

type Collection = {
  id: string;
  title: string;
  description: string;
};

export default function CollectionsContent({
  collections,
}: {
  collections: Collection[];
}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row py-1">
        {collections.map((col) => (
          <View
            key={col.id}
            className="w-[200px] bg-[#2a2a2a] p-3 rounded-xl mr-3"
          >
            <Text className="text-white font-bold mb-1">{col.title}</Text>
            <Text className="text-[#bdbdbd]">{col.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
