import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles/style';

import { Component } from './components/Components';

export default function App() {
  return (
    <View style={styles.container}>
      <Component nome="Xandão"/>
      <Text style={styles.text}>Olá, React Native!!</Text>
    </View>
  );
}