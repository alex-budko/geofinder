import {
  Box,
  Center,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Button,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import SecondaryOptions from "./SecondaryOptions";

import "intro.js/introjs.css";

import { Steps } from "intro.js-react";

import { TiWeatherStormy } from "react-icons/ti";
import { GiSmokingVolcano } from "react-icons/gi";
import { IoMdThunderstorm } from "react-icons/io";
import { RiEarthquakeFill } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { useState } from "react";

export default function Entrance({
  setViewingWeather,
  setPassedParameters,
  setType,
}) {
  const [stepsEnabled, setStepsEnabled] = useState(false);

  const onChange = (e) => {
    setType(e);
  };

  return (
    <>
      <Steps
        enabled={stepsEnabled}
        steps={[
          {
            element: ".main-box",
            tooltipClass: "tutorial-tooltip",
            intro:
              "Welcome to GeoFinder, an open-source app to visualize current weather alerts around the world!",
          },
          {
            element: ".weatherAlerts",
            tooltipClass: "tutorial-tooltip",
            intro:
              "You can view current alert zones within the U.S. territories!",
          },
          {
            element: ".wildfires",
            tooltipClass: "tutorial-tooltip",
            intro: "Or, current active wildfires around the world!",
          },
          {
            element: ".earthquakes",
            tooltipClass: "tutorial-tooltip",
            intro: "Or, scary earthquakes happening around the glove",
          },
          {
            element: ".severeStorms",
            tooltipClass: "tutorial-tooltip",
            intro: "Or, dangerous oceanic storms!",
          },
          {
            element: ".volcanoes",
            tooltipClass: "tutorial-tooltip",
            intro: "Or, even active volcanoes!",
          },
          {
            element: ".weather",
            tooltipClass: "tutorial-tooltip",
            intro:
              "Or, you can even check out the current weather conditons at any location throughout the globe!",
          },
          {
            element: ".view-map",
            tooltipClass: "tutorial-tooltip",
            intro: "Select your option, click 'View Map,' and enjoy!",
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
          <HStack className="weather">
            <SecondaryOptions
              setViewingWeather={setViewingWeather}
              setStepsEnabled={setStepsEnabled}
            />
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
                Select
              </Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.800")} px={6} py={10}>
            <RadioGroup
              onChange={(e) => onChange(e)}
              defaultValue="weatherAlerts"
            >
              <Center>
                <Stack mt="-5" mb="4" spacing="5">
                  <Radio className={"weatherAlerts"} value="weatherAlerts">
                    {" "}
                    Alert Zones (U.S.){" "}
                    <TiWeatherStormy style={{ display: "inline-block" }} />
                  </Radio>
                </Stack>
              </Center>
              <Center>
                <HStack>
                  <Stack mr="7" spacing="5">
                    <Radio className={"wildfires"} value="wildfires">
                      Wildfires{" "}
                      <AiOutlineFire style={{ display: "inline-block" }} />
                    </Radio>
                    <Radio className={"earthquakes"} value="earthquakes">
                      Earthquakes{" "}
                      <RiEarthquakeFill style={{ display: "inline-block" }} />
                    </Radio>
                  </Stack>

                  <Stack spacing="3">
                    <Radio className={"severeStorms"} value="severeStorms">
                      Severe Storms{" "}
                      <IoMdThunderstorm style={{ display: "inline-block" }} />
                    </Radio>
                    <Radio className={"volcanoes"} value="volcanoes">
                      Volcanoes{" "}
                      <GiSmokingVolcano style={{ display: "inline-block" }} />
                    </Radio>
                  </Stack>
                </HStack>
              </Center>
            </RadioGroup>

            <Button
              mt={10}
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
