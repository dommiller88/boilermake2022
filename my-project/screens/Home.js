import { Center, Select, Button } from 'native-base';
import { useState } from 'react';
import { StyleSheet,  Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const stylesLogo = StyleSheet.create({
    container: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    logo: {
      width: width/1.2,
      bottom: height/5,
    },
  });

export default function Home() {

    let [university, setUniversity] = useState("");

  return (
    <Center flex={1} px="1">
        <Image
            style={stylesLogo.logo}
            resizeMode='contain'
            source={require('../assets/openspace.png')}
        />
        <Select
            selectedValue={university}
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
            <Select.Item label="Harvard Univ" value="backend" />
        </Select>
        <Button 
            size="lg"
            style={{
                backgroundColor: '#020202',
            }}
        >Enter Courses</Button>
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