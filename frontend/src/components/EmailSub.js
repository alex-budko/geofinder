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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { entrance_email } from "../utils/entranceEmail";

export default function EmailSub() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial" | "submitting" | "success");
  const [error, setError] = useState(false);

  return (
    <Center>
      <Box
        mb={"5"}
        bgColor={"blue.800"}
        maxW={"lg"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        shadow='dark-lg'
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
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            entrance_email(e.target[0].value)

            setTimeout(() => {
              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Your Email"}
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
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error
            ? "Oh no an error occured! ???? Please try again later."
            : "You won't receive any spam! ??????"}
        </Text>
      </Box>
    </Center>
  );
}
