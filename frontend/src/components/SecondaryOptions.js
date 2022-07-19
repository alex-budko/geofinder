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
  } from '@chakra-ui/react';
  
  import { BsThreeDotsVertical, BsThreeDots } from 'react-icons/bs';
  import { useState } from 'react';
  import { BiHelpCircle } from 'react-icons/bi'
  import { FaExchangeAlt } from 'react-icons/fa'
  import { AiOutlineInfoCircle } from 'react-icons/ai'
  
  
  export default function ServerSecondaryOptions() {
    const [active, setActive] = useState(false)
    return (
      <Flex ml={5} mt={5}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <IconButton
            onClick={()=>setActive(!active)}
              aria-label="Options"
              icon={active ? <BsThreeDots /> : <BsThreeDotsVertical />}
              variant="solid"
              w="fit-content"
            />
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack >
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<FaExchangeAlt />}
                  justifyContent="center"
                  fontWeight="normal"
                  fontSize="sm">
                  Change Topic
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<BiHelpCircle />}
                  justifyContent="center"
                  fontWeight="normal"
                  fontSize="sm">
                  Tutorial
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<AiOutlineInfoCircle />}
                  justifyContent="center"
                  fontWeight="normal"
                  fontSize="sm">
                  About
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  }