import { Button, Container, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorModeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container alignItems={'right'}>
        <Button
        alignItems={'center'}
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content">
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Container>
      
  );
}