import {
  Center,
  Container,
  Heading,
  Input,
  Stack,
  VStack,
  Button,
  HStack,
  Card,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  return (
    <Container
      maxW={'container.xl'}
      h={'100vh'}
      //   p="16"
      //   filter={'blur(3px)'}
    >
      <Card
        w={['84', 'lg']}
        m={'auto'}
        my={'28'}
        cursor={'pointer'}
        boxShadow="dark-lg"
        transition={'all 0.6s'}
      >
        <form>
          <VStack
            alignItems={'stretch'}
            w={['full', 'sm']}
            spacing={'8'}
            m={'auto'}
            my={'16'}
          >
            <Heading
              textTransform={'uppercase'}
              fontFamily={'Roboto Mono'}
              ml={['12', 0]}
            >
              Welcome Back😋
            </Heading>

            <Input
              required
              type={'email'}
              placeholder={'Email'}
              w={['fill', '']}
            />
            <Input required type={'Password'} placeholder={'Password'} />
            <HStack justifyContent={'space-between'}>
              <Button variant={'link'} alignSelf={'flex-end'} ml={[5, 0]}>
                <Link to="/new">New User?</Link>
              </Button>
              <Button variant={'link'} alignSelf={'flex-start'} mr={[15, 0]}>
                <Link to={'/'}>Forgot Password</Link>
              </Button>
            </HStack>
            <Button colorScheme={'purple'}>Log In</Button>
          </VStack>
        </form>
      </Card>
    </Container>
  );
}

export default Login;
