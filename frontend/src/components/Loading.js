import React from "react";

import { VStack, Box, Center, Heading, Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <Box position={"relative"} top="40vh">
      <Center>
        <VStack spacing={4} align="stretch">
          <Heading as="h3" size="xl" display={"block"}>
            Loading Your Map...
          </Heading>
          <Center>
            <Spinner
              display={"block"}
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        </VStack>
      </Center>
    </Box>
  );
}

export default Loading;
