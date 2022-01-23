import { Box, Center, VStack, Heading, Button } from 'native-base';
import { useState } from 'react';

export default function CourseInfoComplete({ edit, courseSubject, courseNumber, courseDate}) {

    const isEdit = edit;

    const EditCourseInfo = () => {
        return (
            <Box>
                EDIT!
            </Box>
        );
    }

    const CompleteCourseInfo = () => {
        return (
            <Center flex={1}>
            <Box
            mx={10}
            w="320"
            h="160"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            shadow={3}
            borderWidth="1"
            margin={5}
            padding={3}
            _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
            }}
            _light={{
                backgroundColor: "gray.50",
            }}
            >
                <VStack space="2">
                    <Heading>{courseSubject + " " + courseNumber}</Heading>
                    <Box mx="3">{courseDate}</Box>
                    <Button 
                        size="lg"
                        mx="3"
                        w="30%"
                        marginTop={2}
                        bgColor="dark.100"
                        _hover={{
                            bg: 'dark.200'
                        }}
                        _pressed={{
                            bg: 'dark.200',
                            borderRadius: '4'
                        }} >
                        Edit
                    </Button>
                </VStack>
            </Box>
        </Center>
        );
    }


    return (
        <Box>
            {isEdit ? <EditCourseInfo /> : <CompleteCourseInfo />}
        </Box>
        
    );
}