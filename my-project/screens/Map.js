import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import { Box, VStack, ZStack, Button, Heading} from 'native-base';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API} from '@env'
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Map({universityName}) {

  const origin = {latitude: 40.425392066007554, longitude: -86.91506838968994};
  const destination = {latitude: 40.42549824130531, longitude: -86.91324448766233};
  let meal = [];
  let study = [
{
    "Name": "BCC",
    "Location": [40.428306314470575, -86.91916931398097]
},
{
    "Name": "BCHM",
    "Location": [40.424147731553745, -86.91648289810344]
},
{
    "Name": "CHAS",
    "Location": [40.429547270965465, -86.91503554466478]
},
{
    "Name": "CREC",
    "Location": [40.42963717641218, -86.92141922192212]
},
{
    "Name": "FRNY",
    "Location": [40.43056056115519, -86.9095824717497]
},
{
    "Name": "HAMP",
    "Location": [40.43138131563567, -86.91131607860551]
},
{
    "Name": "HIKS",
    "Location": [40.42491551563692, -86.90944860135812]
},
{
    "Name": "KRAN",
    "Location": [40.424700177211896, -86.90763800135953]
},
{
    "Name": "KNOY",
    "Location": [40.428848653054416, -86.9067632717526]
},
{
    "Name": "KRCH",
    "Location": [40.428586193777114, -86.91614220352476]
},
{
    "Name": "LILY",
    "Location": [40.42979332695456, -86.91846286587509]
},
{
    "Name": "LWSN",
    "Location": [40.43797170378416, -86.92030938513383]
},
{
    "Name": "MATH",
    "Location": [40.4276012610766, -86.91566510603349]
},
{
    "Name": "PHYS",
    "Location": [40.43110278386614, -86.91290667534265]
},
{
    "Name": "PMU",
    "Location": [40.426529756970254, -86.91077814466799]
},
{
    "Name": "RHPH",
    "Location": [40.43092992397061, -86.91663962876373]
},
{
    "Name": "STEW",
    "Location": [40.42705864418407, -86.91305170245623]
},
{
    "Name": "WALC",
    "Location": [40.42906401433117, -86.91325586739967]
},
{
    "Name": "HCRN",
    "Location": [40.428105027572705, -86.9190375219275]
},
{
    "Name": "ARMS",
    "Location": [40.43245099530367, -86.91424202191783]
},
{
    "Name": "RAWL",
    "Location": [40.43577357998041, -86.90984178085648]
},
{
    "Name": "BRNG",
    "Location": [40.4264227749306, -86.91621093672715]
},
{
    "Name": "WTHR",
    "Location": [40.42815433733094, -86.91297811468934]
}

];
  // let [studyState, setStudyState] = useState([]);
  // let [mealState, setMealState] = useState([]);

  // const startup = useEffect( async () => {
  //   const info = await axios.get('../buildings.json');
  //   for (let i = 0; i < info.data.Study.length; i++) {
  //     const toAppend = {
  //       "latitude": info.data.Study[i].location[0],
  //       "longitude": info.data.Study[i].location[1]
  //     }
  //     study.concat(toAppend);
  //   }
  //   setStudyState(study);

  //   for (let i = 0; i < info.data.Meal.length; i++) {
  //     const toAppend = {
  //       "latitude": info.data.Meal[i].location[0],
  //       "longitude": info.data.Meal[i].location[1]
  //     }
  //     meal.concat(toAppend);
  //   }
  //   setMealState(meal);

  // }, []);


  

  const overlayWindowHeight = 325;

    
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
        apikey={GOOGLE_API}
        strokeWidth={10}
        strokeColor="#06b6d4"  //06b6d4
        waypoints={[
          {latitude: 40.42815433733094, longitude: -86.91297811468934},
          {latitude: 40.42761166987847, longitude: -86.92615554230238},
        ]}
        onStart={(params) => {
          console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
        }}
        onReady={result => {
          console.log(`Distance: ${result.distance} km`)
          console.log(`Duration: ${result.duration} min.`)

          // this.mapView.fitToCoordinates(result.coordinates, {
          //   edgePadding: {
          //     right: (width / 20),
          //     bottom: (height / 20),
          //     left: (width / 20),
          //     top: (height / 20),
          //   }
          // });
        }}
        onError={(errorMessage) => {
            console.log('GOT AN ERROR');
        }}
      />
      <Marker coordinate={{ latitude : 40.424175 , longitude : -86.914376 }} />
      </MapView>
        <Box mt={styles.map.height - overlayWindowHeight} bg="gray.50" borderColor="coolGray.200" width="full" height={overlayWindowHeight} rounded="lg" shadow={3}>
            <VStack space="3" alignItems="center" justifyContent="center">
                <Heading m="5">Purdue University</Heading>
                <Text size="lg" m="20" style={{textAlign: "center"}}>See above for a map detailing the study locations nearest to your classes</Text>
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
