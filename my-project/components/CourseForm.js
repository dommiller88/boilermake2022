import { Center, Box } from 'native-base';
import { useState } from 'react';
import { CourseInfoComplete, CourseInfoEntry } from './';

export default function CourseForm(props) {

    const [isComplete, setIsComplete] = useState(false);

    return (
        <Box>
            {isComplete ? <CourseInfoComplete /> : <CourseInfoEntry />}
        </Box>
        
    );
}