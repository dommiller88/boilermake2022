import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const win = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up yo butt to start working on your app!</Text>
      <Image
        style={{width: win.width/2, height: win.width/2 }}
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
