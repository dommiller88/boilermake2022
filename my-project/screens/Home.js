import { Center, Box, NativeBaseProvider } from 'native-base';
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
    <Center flex={1} px="3">
        <Image
        style={stylesLogo.logo}
        resizeMode='contain'
        source={require('../assets/openspace.png')}
        />
    </Center>
    
  );
}

/*

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});