import { Box, Select, Button, Center, VStack } from 'native-base';
import { useState } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const stylesLogo = StyleSheet.create({
    logo: {
      width: width/1.4,
      marginTop: -height/5,
      marginBottom: -height/10
    },
  });

export default async function Home() {
  let disabled = false;
  let [university, setUniversity] = useState("");
  let routePage = '';
  useEffect(async () => {
      try {
          const value = await AsyncStorage.getItem('@stored');
          if (value != null) {
            routePage = 'Map';
          }
          else {
            routePage = 'Courses';
          }
      }
      catch(e) {
          error.log(e);
      }
  }, [])
  return (
    <Center flex={1} px="3">
        <Box
        maxW="lg"
        h="85%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
        }}
        _web={{
            shadow: 2,
            borderWidth: 0,
        }}
        _light={{
            backgroundColor: "gray.50",
        }}
        >
            <VStack space={"lg"} alignItems="center">
                <Image
                    style={stylesLogo.logo}
                    resizeMode='contain'
                    source={require('../assets/openspace.png')}
                />
                <Box _text={{fontSize: "md"}} m="4">Use openspace to find the best route to your classes and open study spaces for when you aren't in lecture!</Box>
                <Select
                    selectedValue={university}
                    width="100%"
                    size="xl"
                    minWidth="200"
                    accessibilityLabel="Choose University"
                    placeholder="Choose University"
                    mt={1}
                    onValueChange={(itemValue) => setUniversity(itemValue)}
                >

                    <Select.Item label="Purdue University" value="ux" />
                    <Select.Item label="Indiana University" value="web" />
                    <Select.Item label="Michigan University" value="cross" />
                    <Select.Item label="University of Illinois" value="ui" />
                    <Select.Item label="Harvard University" value="backend" />
                </Select>
                <Button 
                    size="lg"
                    bgColor="dark.100"
                    _hover={{
                        bg: 'dark.200'
                    }}
                    _pressed={{
                        bg: 'dark.200'
                    }}
                    isDisabled={disabled}
                    onPress={() => console.log("hello world")}
                    >Enter Courses</Button>
            </VStack>
        </Box>
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