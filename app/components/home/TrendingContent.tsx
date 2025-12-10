import React from "react";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";
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
        <View style={styles.card}>
          <Image source={posters[item.poster]} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.meta}>
            {item.duration} • {item.artist}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { width: 180, marginRight: 12 },
  image: { width: "100%", height: 160, borderRadius: 12 },
  title: { color: "white", marginTop: 8, fontWeight: "600" },
  meta: { color: "#bdbdbd", marginTop: 4, fontSize: 12 },
});
