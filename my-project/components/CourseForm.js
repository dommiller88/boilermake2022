import { Center } from 'native-base';
import { useState } from 'react';
import { CourseInfoComplete, CourseInfoEntry } from './';

export default function CourseForm(props) {

    const [isComplete, setIsComplete] = useState(false);

    return (
        <Center flex={1} px="1">
            {isComplete ? <CourseInfoComplete /> : <CourseInfoEntry />}
        </Center>
        
    );
}