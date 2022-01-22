import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import { Box, VStack, ZStack, Button, Center, Heading} from 'native-base';
import { Link } from 'react-router-native';

export default function App(props) {

    const universityName = props.universityName;

  return (

    <ZStack>
        <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 40.424175,
          longitude: -86.914376,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
      }}
      > 
      <Marker coordinate={{ latitude : 40.424175 , longitude : -86.914376 }} />
      </MapView>
        <Box mt={styles.map.height - 180} bg="gray.50" borderColor="coolGray.200" width="full" height="180" rounded="lg" shadow={3}>
            <VStack space="3" alignItems="center" justifyContent="center">
                <Heading m="5">Purdue University</Heading>
                <Text size="10" m="10">See below for a map detailing how to get to your class</Text>
                <Link to="/">
                    <Button size="lg"
                            maxW="40%" size="lg"
                            bgColor="dark.100"
                            _hover={{
                                bg: 'dark.200'
                            }}
                            _pressed={{
                                bg: 'dark.200',
                                borderRadius: '4'
                            }}>Back</Button>
                </Link>
            </VStack>
        </Box>
    </ZStack>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
