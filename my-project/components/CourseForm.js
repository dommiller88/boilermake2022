import { Center, Box } from 'native-base';
import { useState, useEffect } from 'react';
import { CourseInfoComplete, CourseInfoEntry } from './';

export default function CourseForm({courseSubject, courseNumber, courseDate, courseCRN, courseLocation}) {

    const [complete2, setComplete2] = useState(false);

    // Changes courseForm to display as an info complete version
    const changeCompletionStatus = (subject, number, date, crn, location) => {
        courseSubject = subject;
        courseNumber = number;
        courseDate = date;
        courseCRN = crn;
        courseLocation = location;
        setComplete2(!complete2);
    }
    
    return (
        <Box>
            {complete2 ? <CourseInfoComplete 
                            courseSubject={courseSubject}
                            courseNumber={courseNumber}
                            courseDate={courseDate}
                            courseLocation={courseLocation}
                            courseCRN={courseCRN} /> : 
                          <CourseInfoEntry 
                            courseSubject={courseSubject}
                            courseNumber={courseNumber}
                            courseDate={courseDate}
                            changeComplete={changeCompletionStatus}/>}
        </Box>
        
    );
}