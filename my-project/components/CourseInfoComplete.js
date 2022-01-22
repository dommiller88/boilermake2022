import { Box, Center } from 'native-base';
import { useState } from 'react';
import { CourseInfoComplete, CourseInfoEntry } from './';

export default function CourseInfoComplete(props) {

    const [isEdit, setIsEdit] = useState(false);

    const EditCourseInfo = () => {
        return (
            <Box>
                EDIT!
            </Box>
        );
    }

    const CompleteCourseInfo = () => {
        return (
            <Box>
                COMPLETE!
            </Box>
        );
    }


    return (
        <Box>
            {isEdit ? <EditCourseInfo /> : <CompleteCourseInfo />}
        </Box>
        
    );
}