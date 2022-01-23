import { Box, Select, Button } from 'native-base';
import { useState, useEffect } from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function Home({ navigation }) {
    let [university, setUniversity] = useState("");
    let [disabled, setDisabled] = useState(true);
    let doRedirect = false;

    // Allow button to be used only when
    // the user has selected a university
    useEffect(() => {
      console.log(university);
      if (university != "") {
        setDisabled(false);
      }
    }, [university])

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'stretch', padding: 20, height: '100%'}}>
            <Image
                style={{ width: width/1.4, height: height/5, alignSelf: 'center' }}
                resizeMode='contain'
                source={require('../assets/openspace.png')}
            />
            <Box _text={{fontSize: "md", textAlign: "center"}}>Use openspace to find the best open study spaces on campus! Enter your courses to find optimal study spots for the downtime you have between lecture.</Box>
            <Select
                selectedValue={university}
                size="xl"
                accessibilityLabel="Choose University"
                placeholder="Choose University"
                onValueChange={(itemValue) => setUniversity(itemValue)}
            >
                <Select.Item label="Purdue University" value="pu" />
                <Select.Item label="Indiana University" value="iu" />
                <Select.Item label="Michigan University" value="mu" />
                <Select.Item label="University of Illinois" value="uiuc" />
                <Select.Item label="Harvard University" value="hu"/>
            </Select>
            <Button 
                size="lg"
                bgColor="dark.100"
                _hover={{
                    bg: 'dark.200'
                }}
                _pressed={{
                    bg: 'dark.200',
                    borderRadius: '4'
                }}
                isDisabled={disabled}
                onPress={() => navigation.navigate('Course Input')}
                >Enter Courses</Button>
        </View>
    );
}


