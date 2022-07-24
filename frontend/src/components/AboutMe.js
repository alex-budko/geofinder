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
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Alex Budko
            </Heading>
            <Text color={"gray.500"}>UPenn Undergrad</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={12}>
            <Stack spacing={0} align={"center"}>
              <Text fontSize={"sm"} color={"gray.500"}>
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
