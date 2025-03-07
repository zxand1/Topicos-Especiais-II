import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const data = Array.from({ length: 50 }, (_, i) => ({
  id: i, name: `Item ${i + i}`}));

export default function App() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: "column",
    gap: 10,
  },
  item: {
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  },
});
