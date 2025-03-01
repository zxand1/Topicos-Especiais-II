import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <View>
        <Text>Caixa 1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirectiion: "row",
    justifyContent: "space-around"
  },
});
