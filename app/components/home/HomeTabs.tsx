import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type Tab = "Trending" | "Categories" | "Collections";

type Props = {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
};

const tabs: Tab[] = ["Trending", "Categories", "Collections"];

export default function HomeTabs({ activeTab, onChange }: Props) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab} onPress={() => onChange(tab)}>
          <Text style={[styles.tabText, activeTab === tab && styles.active]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 24,
    marginTop: 16,
  },
  tabText: {
    color: "#bdbdbd",
    fontSize: 18,
    fontWeight: "500",
  },
  active: {
    color: "white",
    fontWeight: "700",
  },
});
