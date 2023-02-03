import {
  border,
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const VideoUpload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10rem'} />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36)',
                  height: '100%',
                  marginLeft: '-16px',
                  color: 'purple',
                  backgroundColor: 'white',
                },
              }}
            />
            <Button colorScheme={'purple'}>Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default VideoUpload;
