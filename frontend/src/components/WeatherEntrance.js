import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  HStack,
  Switch,
} from "@chakra-ui/react";
import SecondaryOptions from "./SecondaryOptions";

import {FaFlagUsa} from 'react-icons/fa'
import "intro.js/introjs.css";

import { Steps } from "intro.js-react";
import { useState } from "react";

export default function WeatherEntrance({ setViewingWeather, setPassedParameters }) {
  const [stepsEnabled, setStepsEnabled] = useState(false)
  return (
    <>
      <Steps
        enabled={stepsEnabled}
        steps={[
          {
            element: ".view-map",
            tooltipClass: "tutorial-tooltip",
            intro:
              "To view the current weather around the globe, click 'View Map', and enjoy!",
          },
        ]}
        initialStep={0}
        onExit={() => setStepsEnabled(false)}
      />

      <Center py={6}>
        <Box
          maxW={"360px"}
          w={"full"}
          bg={useColorModeValue("white", "blue.600")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <HStack>
            <SecondaryOptions setViewingWeather={setViewingWeather} setStepsEnabled={setStepsEnabled} />
          </HStack>

          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.900", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
              className={"main-box"}
            >
              GeoFinder
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"5xl"} fontWeight={800}>
                View Weather
              </Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.800")} px={6} py={10}>
            <Center>
              <HStack spacing={2}>
                <FaFlagUsa style={{ display: "inline-block"}} />
                <Text fontSize="lg">Only Load U.S. Weather Data</Text>
                <Switch colorScheme="teal" size="lg" />
              </HStack>
            </Center>

            <Button
              mt={5}
              w={"full"}
              bg={"green.400"}
              color={"white"}
              rounded={"xl"}
              onClick={() => setPassedParameters(true)}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
              className={"view-map"}
            >
              View Map
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
}
