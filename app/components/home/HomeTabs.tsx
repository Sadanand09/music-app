import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Tab = "Trending" | "Categories" | "Collections";

type Props = {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
};

const tabs: Tab[] = ["Trending", "Categories", "Collections"];

export default function HomeTabs({ activeTab, onChange }: Props) {
  return (
    <View className="flex-row justify-between px-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onChange(tab)}
            activeOpacity={0.7}
          >
            <Text
              className={`text-xl font-bold ${
                isActive ? "text-[#9570E1]" : "text-white/70"
              }`}
            >
              {tab}
            </Text>

            {/* Active indicator */}
            {isActive && (
              <View className="h-0.5 w-full bg-[#9570E1] rounded-full mt-1" />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
