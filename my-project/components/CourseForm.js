import { Center, Box } from 'native-base';
import { useState } from 'react';
import { CourseInfoComplete, CourseInfoEntry } from './';

export default function CourseForm({complete, courseSubject, courseNumber, courseDate}) {

    const isComplete = complete;

    return (
        <Box>
            {isComplete ? <CourseInfoComplete 
                            courseSubject={courseSubject}
                            courseNumber={courseNumber}
                            courseDate={courseDate} /> : 
                          <CourseInfoEntry 
                            courseSubject={courseSubject}
                            courseNumber={courseNumber}
                            courseDate={courseDate}/>}
        </Box>
        
    );
}