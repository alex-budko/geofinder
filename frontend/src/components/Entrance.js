import {
  Box,
  Center,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Entrance({ setPassedParameters, setType }) {

  const onChange = e => {
    setType(e)
  }

  return (
    <Center py={6}>
      <Box
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
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
          >
            GeoFinder
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"5xl"} fontWeight={800}>
              Option Select
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <RadioGroup onChange={(e) => onChange(e)} defaultValue="1">
            <Center>
              <Stack mr='10' spacing="3">
                <Radio value="wildfires">Wildfires</Radio>
                <Radio value="severeStorms">Severe Storms</Radio>
                <Radio value="volcanoes">Volcanoes</Radio>
              </Stack>
              <Stack spacing="3">
                <Radio value="4">Unchecked</Radio>
                <Radio value="5">Unchecked</Radio>
                <Radio value="6">Unchecked</Radio>
              </Stack>
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
          >
            View Map
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
