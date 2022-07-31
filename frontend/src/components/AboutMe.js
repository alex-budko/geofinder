import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { AiFillGithub } from "react-icons/ai";

export default function AboutMe() {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        overflow={"hidden"}
      >

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Alex Budko
            </Heading>
            <Text color={"gray.500"}>UPenn Undergrad</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={12}>
            <Stack spacing={0} align={"center"}>
              <Text fontSize={"sm"} color={"gray.200"}>
                Hey, my name is Alex and I am an undegrad at UPenn!
                <br /> <br />I developed this open-source app in hopes that it
                would make it easier for people to find potential danger alerts,
                whether it be close to their home or on the other side of the
                continent
              </Text>
            </Stack>
          </Stack>

          <Button
            w={"full"}
            as={"a"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            href="https://github.com/alex-budko"
          >
            <AiFillGithub />
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
