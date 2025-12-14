import React, { useState } from "react";
import { ImageBackground, ScrollView, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeTabs from "../../components/home/HomeTabs";
import TrendingContent from "../../components/home/TrendingContent";
import CategoriesContent from "../../components/home/CategoriesContent";
import CollectionsContent from "../../components/home/CollectionsContent";
import Header from "@/app/components/common/Header";
import ArtistsRow from "@/app/components/home/ArtistsRow";

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
      <SafeAreaView className="flex-1">
        {/* Header */}
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        >
          {/* Screen padding */}
          <View className="px-5 mb-12">
            {/* Banner (Edge to Edge) */}
            <View className="w-full p-0 mt-9">
              <Image
                source={require("../../../assets/images/Song.png")}
                className="w-full h-auto"
                resizeMode="cover"
              />
            </View>

            {/* Artists */}
            <ArtistsRow />

            {/* Tabs */}
            <HomeTabs activeTab={activeTab} onChange={setActiveTab} />

            {/* Content */}
            <View className="mt-6">
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
