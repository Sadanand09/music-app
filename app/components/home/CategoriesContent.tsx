import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
        <View key={cat.id} style={styles.card}>
          <Text style={styles.title}>{cat.name}</Text>
          <Text style={styles.meta}>{cat.count} songs</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: { color: "white", fontWeight: "600", fontSize: 16 },
  meta: { color: "#bdbdbd", marginTop: 4 },
});
