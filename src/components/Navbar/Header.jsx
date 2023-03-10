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
              <Link to="/">
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Home
                </Button>
              </Link>
              <Link to="/videos">
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Videos
                </Button>
              </Link>
              <Link to="/videos?catogary=free">
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Free Videos
                </Button>
              </Link>
              <Link to="/upload">
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Upload videos
                </Button>
              </Link>
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
