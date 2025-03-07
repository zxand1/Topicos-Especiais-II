import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-web";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      {Array.from({ length: 20 }).map((_, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>Item {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  item: {
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
})