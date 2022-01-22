import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Bruh!</Text>
      <Image
        style={{width: 100, height: 100 }}
        source={require('../assets/openspace.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});