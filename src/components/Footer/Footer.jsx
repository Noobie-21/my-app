import {
  Box,
  Heading,
  HStack,
  Stack,
  VStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineGithub, AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.800'} minH={'40'} p={'16'} color="white">
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to NewsLater
          </Heading>
          <HStack borderBottom={'2px solid purple'} pb={'4'}>
            <Input
              type={'text'}
              placeholder={'Enter Email Here'}
              border={'none '}
              outline={'none'}
              focusBorderColor={'none'}
              borderRadius={'20px 0px 0px 20px'}
            />
            <Button
              p={0}
              color={'purple'}
              varient={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All right reserved </Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social MEdia
          </Heading>
          <Button varient={'outline'} colorScheme={'white'}>
            <a href="https://github.com/Noobie-21">
              <AiOutlineGithub size={40} color={'white'} />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
