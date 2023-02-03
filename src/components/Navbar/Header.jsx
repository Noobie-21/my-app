import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { BiArrowFromLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={4}
        left={4}
        zIndex={1000}
        onClick={onOpen}
        borderRadius={'full'}
        colorScheme={'purple'}
      >
        <BiArrowFromLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement={'left'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to="/videos">Video</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to="/videos?category=free">Free Video</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to="/upload">Upload video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'} margin={'4'}>
                <Link to="/login">Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to="/new">Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
