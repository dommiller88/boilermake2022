import React from "react"
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base"

export default function MapInfo({buildingInfoArray, typeState}) {

    const Banners = (
        <Box width="100%">
            <Box
            width="100%"
            marginBottom="0"
            bg="primary.500"
            p="4"
            shadow={2}
            _text={{
                fontSize: "md",
                fontWeight: "bold",
                color: "white",
            }}
            >
            This is a Box
            
            </Box>
            <Box
            width="100%"
            marginBottom="0"
            bg="primary.500"
            p="4"
            shadow={2}
            _text={{
                fontSize: "md",
                fontWeight: "bold",
                color: "white",
            }}
            >
            This is a Box
            
            </Box>
            <Box
            width="100%"
            marginBottom="0"
            bg="primary.500"
            p="4"
            shadow={2}
            _text={{
                fontSize: "md",
                fontWeight: "bold",
                color: "white",
            }}
            >
            This is a Box
            
            </Box>
            <Box
            width="100%"
            marginBottom="0"
            bg="primary.500"
            p="4"
            shadow={2}
            _text={{
                fontSize: "md",
                fontWeight: "bold",
                color: "white",
            }}
            >
            This is a Box
            
            </Box>
        </Box>
    );

    const Info = (
        <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
        }}
        _web={{
            shadow: 2,
            borderWidth: 0,
        }}
        _light={{
            backgroundColor: "gray.50",
        }}
        >
        <Box>
            <AspectRatio w="50%" ratio={16/ 9}>
            <Image
                source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
            />
            </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
            <Stack space={2}>
            <Heading size="md" ml="-1">
                The Garden City
            </Heading>
            </Stack>
            <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
            </HStack>
            </HStack>
        </Stack>
        </Box>

    )

    if (state == 'banners') {
        return (
            Banners
        );
    }
    else if (state == 'info') {
        return (
            Info
        );
    }
    else {
        return (
            <Heading m="5">Purdue University</Heading>
        )
    }



   

}