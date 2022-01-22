import { Center, Box, VStack, HStack, Heading, Input } from 'native-base';
import { useState } from 'react';

export default function CourseInfoEntry(props) {

    return (
        <Center flex={1}>
            <Box
            w="320"
            h="200"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            shadow={3}
            borderWidth="1"
            padding={3}
            _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
            }}
            _light={{
                backgroundColor: "gray.50",
            }}
            >
                <VStack space="3">
                    <Heading>Enter Course Info</Heading>
                    <HStack>
                        <Input></Input>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
}