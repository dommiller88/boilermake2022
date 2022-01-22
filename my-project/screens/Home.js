import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const stylesLogo = StyleSheet.create({
    container: {
      paddingTop: 0,
      paddingBottom: 50,
    },
    logo: {
      width: width/1.2,
      height: height/1,
      bottom: height/5,
    },
  });

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={stylesLogo.logo}
        resizeMode='contain'
        source={require('../assets/openspace.png')}
      />
      <Text>Open up yo butt to start working on your app!</Text>
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