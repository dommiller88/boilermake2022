import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { Box, Center, VStack, HStack, Input, Heading, Button} from 'native-base';
import { useState } from 'react';

export default function CourseInfoComplete({ edit, courseSubject, courseNumber, courseDate}) {

    const [isEdit, setIsEdit] = useState(false);

    const EditCourseInfo = () => {
        return (
            <Center flex={1}>
            <Box
            mx={10}
            w="320"
            h="250"
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
                    <Heading>Edit Course Info</Heading>
                    <HStack>
                        <Input
                            size="xl" 
                            mx="3"
                            placeholder="CS"
                            w={{
                                base: "25%",
                                md: "25%",
                            }}>{courseSubject}</Input>
                        <Input
                            size="xl" 
                            mx="3"
                            placeholder="18000"
                            w={{
                                base: "30%",
                                md: "25%",
                            }}>{courseNumber}</Input>
                    </HStack>
                
                <Center p="0.5">or</Center>
                <Input
                    size="xl" 
                    mx="3"
                    placeholder="CRN"
                    w={{
                        base: "90%",
                        md: "25%",
                    }}></Input>
                 <Button 
                        size="lg"
                        mx="3"
                        w="50%"
                        marginTop={2}
                        bgColor="dark.100"
                        _hover={{
                            bg: 'dark.200'
                        }}
                        _pressed={{
                            bg: 'dark.200',
                            borderRadius: '4'
                        }} 
                        onPress={() => setIsEdit(false)}>
                        Confirm Edits
                    </Button>
                </VStack>
            </Box>
        </Center>
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
                        }} 
                        onPress={() => setIsEdit(true)}>
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