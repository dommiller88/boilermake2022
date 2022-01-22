import { Center, Select, Button, Input } from 'native-base';
import { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
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

export default function CourseInput() {

    let [courseInput, setCourseInput] = useState("");
    let [courseInput, setCourseInput] = useState("");
    let [courseInput, setCourseInput] = useState("");
    let [classes, setClasses] = useState({});
    let [currentClass, setCurrentClass] = useState("")

    fetch('https://api.purdue.io/odata/Courses?$expand=Classes($filter=Term/Code eq \'202220\';$expand=Sections($expand=Meetings))&$filter=Subject/Abbreviation eq \'CS\' and Number eq \'18000\'').then(response =>{
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
    })

  return (
    <Center flex={1} px="1">
        <Input
            placeholder="Input"
            size="xl"
            minWidth="200"
        />
        <Select
            selectedValue={currentClass}
            size="xl"
            minWidth="200"
            accessibilityLabel="Choose University"
            placeholder="Choose University"
            mt={1}
            onValueChange={(itemValue) => setCurrentClass(itemValue)}
        >
        {/* {classes.map((c) => (
            <Select.Item label={c} value="ux" />
        ))} */}
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