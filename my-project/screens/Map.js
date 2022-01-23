import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import { Box, VStack, ZStack, Button, Center, Heading} from 'native-base';
import { Link } from 'react-router-native';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API} from '@env'
import { useAction, useState } from 'react'
import * as data from '../buildings.json';


export default function Map(props) {

  const origin = {latitude: 40.425392066007554, longitude: -86.91506838968994};
  const destination = {latitude: 40.42549824130531, longitude: -86.91324448766233};
  let study = [];
  let meal = [];
  let [studyState, setStudyState] = useState([]);
  let [mealState, setMealState] = useState([]);

  useAction(() => {
    for (let i = 0; i < data.Study.length; i++) {
      const toAppend = {
        "latitude": data.Study[i].location[0],
        "longitude": data.Study[i].location[1]
      }
      study.concat(toAppend);
    }
    setStudyState(study);

    for (let i = 0; i < data.Meal.length; i++) {
      const toAppend = {
        "latitude": data.Meal[i].location[0],
        "longitude": data.Meal[i].location[1]
      }
      meal.concat(toAppend);
    }
    setMealState(meal);

  }, []);


  

    const universityName = props.universityName;
    const overlayWindowHeight = 250;

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
      {study && study.map(stud => (
        <Marker 
          coordinate={{ latitude : stud.Location[0], longitude: stud.Location[1] }}
          name={stud.Name}
        />
      ))}
      <MapViewDirections
        origin={origin}
        destination={destination}
        mode={'WALKING'}
        // arrival_time={}
        apikey={GOOGLE_API}
      />
      <Marker coordinate={{ latitude : 40.424175 , longitude : -86.914376 }} />
      </MapView>
        <Box mt={styles.map.height - overlayWindowHeight} bg="gray.50" borderColor="coolGray.200" width="full" height={overlayWindowHeight} rounded="lg" shadow={3}>
            <VStack space="3" alignItems="center" justifyContent="center">
                <Heading m="5">Purdue University</Heading>
                <Text size="lg" m="20" style={{textAlign: "center"}}>See above for a map detailing the study locations nearest to your classes</Text>
                
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
                <Box>
                    <Link to="/"><Text>Go back</Text></Link>
                </Box>
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
