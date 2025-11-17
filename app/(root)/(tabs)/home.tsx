import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {posters} from "../../../constants/posterImages";

/*
  Single-file Home screen with three small components defined inline:
  - TrendingContent
  - CategoriesContent
  - CollectionsContent
*/
type Song = {
  id: number;
  title: string;
  duration: string;
  artist: string;
  poster: any;
};


const TrendingContent = ({ data }: { data: Song[] }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        // Maps poster name to local image
        

        return (
          <View style={{ width: 180, marginRight: 12 }}>
            <Image
              source={posters[item.poster]}
              style={{ width: "100%", height: 160, borderRadius: 12 }}
              resizeMode="cover"
            />

            <Text style={{ color: "white", marginTop: 8, fontWeight: "600" }}>
              {item.title}
            </Text>

            <Text style={{ color: "#bdbdbd", marginTop: 4, fontSize: 12 }}>
              {item.duration} • {item.artist}
            </Text>
          </View>
        );
      }}
    />
  );
};

const CategoriesContent = ({ categories }: { categories: any[] }) => {
  // vertical stack of category cards
  return (
    <View style={{ marginTop: 8 }}>
      {categories.map((cat) => (
        <View
          key={cat.id}
          style={{
            backgroundColor: "#222",
            padding: 14,
            borderRadius: 12,
            marginBottom: 12,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
            {cat.name}
          </Text>
          <Text style={{ color: "#bdbdbd", marginTop: 6 }}>{cat.count} songs</Text>
        </View>
      ))}
    </View>
  );
};

const CollectionsContent = ({ collections }: { collections: any[] }) => {
  // horizontal list of collections
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
      <View style={{ flexDirection: "row", paddingVertical: 4 }}>
        {collections.map((col) => (
          <View
            key={col.id}
            style={{
              width: 200,
              backgroundColor: "#2a2a2a",
              borderRadius: 12,
              padding: 12,
              marginRight: 12,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700", marginBottom: 8 }}>
              {col.title}
            </Text>
            <Text style={{ color: "#bdbdbd" }}>{col.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"Trending" | "Categories" | "Collections">(
    "Trending"
  );

  // sample data (replace with your JSON or API)
  const sampleSongs = [
    {
      id: 1,
      title: "All Time Low",
      artist: "Jon B.",
      duration: "03:39",
      type: "Music Pop",
      poster: "All Time Low",
    },
    {
      id: 2,
      title: "Scars To Your Beautiful",
      artist: "Alessia Cara",
      duration: "04:28",
      type: "Music Pop",
      poster: "Scars To Your Beautiful",
    },
    {
      id: 3,
      title: "Hello",
      artist: "Adele",
      duration: "04:55",
      type: "Soul",
      poster: "Hello",
    },
    {
      id: 4,
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "03:20",
      type: "Synth Pop",
      poster: "Blinding Lights",
    },
    {
      id: 5,
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: "03:53",
      type: "Pop",
      poster: "Shape of You",
    },
    {
      id: 6,
      title: "Sunflower",
      artist: "Post Malone",
      duration: "02:38",
      type: "Hip Hop",
      poster: "Sunflower",
    },
    {
      id: 7,
      title: "Perfect",
      artist: "Ed Sheeran",
      duration: "04:23",
      type: "Romantic",
      poster: "Perfect",
    },
    {
      id: 8,
      title: "Levitating",
      artist: "Dua Lipa",
      duration: "03:23",
      type: "Pop",
      poster: "Levitating",
    },
    {
      id: 9,
      title: "Stay",
      artist: "Justin Bieber",
      duration: "03:05",
      type: "Pop",
      poster: "Stay",
    },
    {
      id: 10,
      title: "Someone Like You",
      artist: "Adele",
      duration: "04:45",
      type: "Soul",
      poster: "Someone Like You",
    },
  ];

  const sampleCategories = [
    { id: "c1", name: "Pop", count: 1200 },
    { id: "c2", name: "Hip-Hop", count: 980 },
    { id: "c3", name: "Romantic", count: 420 },
  ];

  const sampleCollections = [
    { id: "col1", title: "Workout Mix", description: "High energy tracks" },
    { id: "col2", title: "Chill Vibes", description: "Relaxing & mellow" },
  ];

  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* header */}
          <View
            style={{ paddingHorizontal: 16, paddingTop: 18 }}
            className="flex flex-row justify-between items-center"
          >
            <View className="ps-4">
              <Text style={{ color: "white", fontSize: 28, fontWeight: "700" }}>
                Welcome back!
              </Text>
              <Text style={{ color: "white", marginTop: 6 }}>Hi, John Doe</Text>
            </View>
            <View className="flex flex-row space-x-3 items-center">
              <Image
                source={require("../../../assets/images/Search.png")}
                className="w-[90px] h-[90px]"
                resizeMode="contain"
              />

              <Image
                source={require("../../../assets/images/Notifications.png")}
                className="w-[90px] h-[90px]"
                resizeMode="contain"
              />
            </View>
          </View>

          {/* banner */}
          <View className="items-center">
            <Image
              source={require("../../../assets/images/Song.png")}
              style={{ width: 540, height: 320, marginTop: 18 }}
              resizeMode="contain"
            />
          </View>

          {/* tabs row */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 18, paddingHorizontal: 16 }}
          >
            <View style={{ flexDirection: "row", gap: 28 }}>
              {(["Trending", "Categories", "Collections"] as const).map((t) => (
                <TouchableOpacity
                  key={t}
                  onPress={() => setActiveTab(t)}
                  style={{ marginRight: 24 }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        color: activeTab === t ? "white" : "#bdbdbd",
                        fontSize: 18,
                        fontWeight: activeTab === t ? "700" : "500",
                      }}
                    >
                      {t}
                    </Text>
                    {activeTab === t && (
                      <View
                        style={{
                          width: 28,
                          height: 4,
                          backgroundColor: "#7B4CFF",
                          borderRadius: 3,
                          marginTop: 6,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* content area: render the component that matches activeTab */}
          <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
            {activeTab === "Trending" && <TrendingContent data={sampleSongs} />}
            {activeTab === "Categories" && (
              <CategoriesContent categories={sampleCategories} />
            )}
            {activeTab === "Collections" && (
              <CollectionsContent collections={sampleCollections} />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
