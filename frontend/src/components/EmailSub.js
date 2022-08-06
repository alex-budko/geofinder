import { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Box,
  Center,
  VStack,
  FormLabel,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { entrance_email } from "../utils/entranceEmail";

export default function EmailSub() {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("initial" | "submitting" | "success");
  const [error, setError] = useState(false);

  return (
    <Center>
      <Box
        mb={"5"}
        bgColor={"blue.800"}
        maxW={"360px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        shadow="dark-lg"
        rounded={"3xl"}
        p={6}
        direction={"column"}
      >
        <Heading
          as={"h4"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          Subscribe to Warning Emails
        </Heading>
        <VStack
          as={"form"}
          spacing={"12px"}
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            entrance_email(email, location);

            setTimeout(() => {
              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.50"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"location"}
              type={"text"}
              required
              placeholder={"Format: City, State/Country"}
              aria-label={"Your Location"}
              value={location}
              disabled={state === "success" || state === "submitting"}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.50"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Email Address"}
              aria-label={"Your Email"}
              value={email}
              disabled={state === "success" || state === "submitting"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              bgColor={state === "success" ? "green.500" : "blue.500"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </VStack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "You won't receive any spam! ✌️"}
        </Text>
      </Box>
    </Center>
  );
}
