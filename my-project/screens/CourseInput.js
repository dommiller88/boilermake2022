import { Center, Select, Button, Input, Box, IconButton } from 'native-base';
import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { CourseForm, CourseSelectModal } from '../components';
<<<<<<< HEAD
// import { CourseForm } from '../components';
=======
>>>>>>> f356744a5bad5e55a7dc927260574d2cc72aacbe
import { MaterialIcons } from "@expo/vector-icons"
const { width, height } = Dimensions.get('window');

export default function CourseInput({ navigation }) {

    let [showModal, setShowModal] = useState(true);
<<<<<<< HEAD
    // let [currentClass, setCurrentClass] = useState("");
=======
    let [courseInputList, setCourseInputList] = useState([]);
    let [classDataList, setClassDataList] = useState([]);
    //let [currentClass, setCurrentClass] = useState("");

    const addNewEntry = () => {
        
    }
>>>>>>> f356744a5bad5e55a7dc927260574d2cc72aacbe

    // Submit courses, then go to next page
    const handleSubmitCourse = () => {
        // TODO: save course information
        navigation.navigate('Map');
    }

    useEffect(() => {
        populateCourseInputList();
    }, []);

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

    const populateCourseInputList = () => {
        let outputList = [];

        // replace dummy data with classDataList.length


        // if classDataList is empty 
        outputList.push(
            <CourseForm 
            />
        );

        // else print out list of classes

        // Add the plus button at the bottom
        outputList.push(<Center><IconButton
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
            onPress={addNewEntry}
        /></Center>);

        //console.log(outputList);

        setCourseInputList(outputList);
    }

    return (
        <Center flex={1} px="1">
            <ScrollView>
                {courseInputList}
                <Center>                    
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
                        >Submit Courses
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