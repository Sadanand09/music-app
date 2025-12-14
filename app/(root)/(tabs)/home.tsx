import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeTabs from "../../components/home/HomeTabs";
import TrendingContent from "../../components/home/TrendingContent";
import CategoriesContent from "../../components/home/CategoriesContent";
import CollectionsContent from "../../components/home/CollectionsContent";
import Header from "@/app/components/common/Header";

import { songs, categories, collections } from "../../data/homeData";


export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<
    "Trending" | "Categories" | "Collections"
  >("Trending");

  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View className="px-3">
            <Header />         
            <HomeTabs activeTab={activeTab} onChange={setActiveTab} />

            <View className="px-3">
              {activeTab === "Trending" && <TrendingContent data={songs} />}
              {activeTab === "Categories" && (
                <CategoriesContent categories={categories} />
              )}
              {activeTab === "Collections" && (
                <CollectionsContent collections={collections} />
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingBottom: 40 },
});
