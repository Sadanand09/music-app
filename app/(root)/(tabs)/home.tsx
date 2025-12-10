import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeTabs from "../../components/home/HomeTabs";
import TrendingContent from "../../components/home/TrendingContent";
import CategoriesContent from "../../components/home/CategoriesContent";
import CollectionsContent from "../../components/home/CollectionsContent";
import Header from "@/app/components/common/Header";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<
    "Trending" | "Categories" | "Collections"
  >("Trending");

  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>
          
          <Header />
          <HomeTabs activeTab={activeTab} onChange={setActiveTab} />

          <View style={styles.content}>
            {activeTab === "Trending" && <TrendingContent data={[]} />}
            {activeTab === "Categories" && (
              <CategoriesContent categories={[]} />
            )}
            {activeTab === "Collections" && (
              <CollectionsContent collections={[]} />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingBottom: 40 },
  content: { paddingHorizontal: 16, marginTop: 12 },
});
