import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

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
      <View style={styles.row}>
        {collections.map((col) => (
          <View key={col.id} style={styles.card}>
            <Text style={styles.title}>{col.title}</Text>
            <Text style={styles.meta}>{col.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", paddingVertical: 4 },
  card: {
    width: 200,
    backgroundColor: "#2a2a2a",
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
  },
  title: { color: "white", fontWeight: "700", marginBottom: 6 },
  meta: { color: "#bdbdbd" },
});
