import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function Home() {
    return (
      <View style={styles.container}>
        <Text>Oops! Page not found</Text>
        <StatusBar style="auto" />
      </View>
    );
  }