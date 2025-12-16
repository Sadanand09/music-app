import React from "react";
import { View, Text } from "react-native";

type Category = {
  id: string;
  name: string;
  count: number;
};

export default function CategoriesContent({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <View>
      {categories.map((cat) => (
        <View key={cat.id} className="bg-[#222] p-[14px] rounded-xl mb-3">
          <Text className="text-white font-semibold text-base">{cat.name}</Text>
          <Text className="text-[#bdbdbd] mt-1">{cat.count} songs</Text>
        </View>
      ))}
    </View>
  );
}
