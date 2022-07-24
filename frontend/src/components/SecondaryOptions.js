import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AboutMe from "./AboutMe";

export default function ServerSecondaryOptions({ setViewingWeather, setStepsEnabled }) {
  const [active, setActive] = useState(false);
  return (
    <Flex ml={5} mt={5}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            onClick={() => setActive(!active)}
            aria-label="Options"
            icon={active ? <BsThreeDots /> : <BsThreeDotsVertical />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        {/* https://openweathermap.org/current */}
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<FaExchangeAlt />}
                justifyContent="center"
                fontWeight="normal"
                fontSize="sm"
                onClick={()=>setViewingWeather(viewing => !viewing)}
              >
                Change Topic
              </Button>
              <Button
                onClick={() => setStepsEnabled(true)}
                w="194px"
                variant="ghost"
                rightIcon={<BiHelpCircle />}
                justifyContent="center"
                fontWeight="normal"
                fontSize="sm"
              >
                Tutorial
              </Button>
              <Popover>
                <PopoverTrigger>
                  <Button
                    w="194px"
                    variant="ghost"
                    rightIcon={<AiOutlineInfoCircle />}
                    justifyContent="center"
                    fontWeight="normal"
                    fontSize="sm"
                  >
                    About
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <AboutMe />
                </PopoverContent>
              </Popover>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
