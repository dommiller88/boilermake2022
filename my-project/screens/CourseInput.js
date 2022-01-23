import { Center, Select, Button, Input, Box, IconButton } from 'native-base';
import { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { CourseForm } from '../components';
import { MaterialIcons } from "@expo/vector-icons"

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

export default function CourseInput({ navigation }) {

    let [courseInput, setCourseInput] = useState("");
    let [classes, setClasses] = useState({});
    let [currentClass, setCurrentClass] = useState("");

    const handleSubmitCourse = () => {
        //TODO: save course information
        navigation.navigate('Map');
    }

    /*fetch('https://api.purdue.io/odata/Courses?$expand=Classes($filter=Term/Code eq \'202220\';$expand=Sections($expand=Meetings))&$filter=Subject/Abbreviation eq \'CS\' and Number eq \'18000\'').then(response =>{
        return response.json();
    }).then(rawdata =>{
        //console.log(rawdata);
        const data = rawdata['value'][0]['Classes'][0]['Sections'];
        console.log(data.length);
        console.log("----------");
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]['Crn']);
            for (let j = 0; j < data[i]['Meetings'].length; j++) {
                console.log(data[i]['Meetings'][j]);
            }
            console.log("--|---|--");
        }
        setClasses(data['value']);
    })*/

  return (
    <Center flex={1} px="1">
        {/*<Select
            selectedValue={currentClass}
            size="xl"
            minWidth="200"
            accessibilityLabel="Choose University"
            placeholder="Choose University"
            mt={1}
            onValueChange={(itemValue) => setCurrentClass(itemValue)}
        > {classes.map((c) => (
            <Select.Item label={c} value="ux" />
        ))} 
        </Select> */}
        
        <ScrollView>
            <CourseForm 
                complete={true} 
                courseSubject={"CS"}
                courseNumber={"18000"} 
                courseDate={"MWF 11:30 AM"}
                courseLocation={"WALC 1020"}
                courseCRN={329122}/>
            <CourseForm />
            <Center>
                <IconButton
                    size='lg'
                    variant="solid"
                    bgColor="dark.100"
                    _hover={{
                        bg: 'dark.200'
                    }}
                    _pressed={{
                        bg: 'dark.200'
                    }}
                    _icon={{
                        as: MaterialIcons,
                        name: "add",
                    }}
                    marginBottom="10"
                    borderRadius="full"
                />
                <Button 
                    size="lg"
                    marginBottom="10"
                    w="60%"
                    bgColor="dark.100"
                    _hover={{
                        bg: 'dark.200'
                    }}
                    _pressed={{
                        bg: 'dark.200',
                        borderRadius: '4'
                    }}
                    onPress={handleSubmitCourse}
                    >
                        Submit Courses
                </Button>
            </Center>
            
        </ScrollView>

    </Center>
    
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