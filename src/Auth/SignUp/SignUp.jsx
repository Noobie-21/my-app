import React from 'react';
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
  Text,
  FormLabel,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container
      maxW={'container.xl'}
      h={'100vh'}
      fontFamily={'Roboto Mono'}
      //   p="16"
      //   filter={'blur(3px)'}
    >
      <Card w={['fill', 'lg']} m={'auto'} my={'28'} boxShadow={'dark-lg'}>
        <form>
          <VStack
            alignItems={'stretch'}
            w={['auto', 'sm']}
            spacing={'8'}
            m={'auto'}
            my={'16'}
          >
            <Heading
              m={['auto', 0]}
              textTransform={'uppercase'}
              fontFamily={'Roboto Mono'}
            >
              Welcome to Movie World😋
            </Heading>
            <Input required type={'text'} placeholder={'Username'} />
            <Input required type={'text'} placeholder={'Full Name'} />
            <Input required type={'email'} placeholder={'Email'} />
            <Input required type={'Password'} placeholder={'Password'} />
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to="/login">Log In</Link>
            </Button>
            <Button colorScheme={'purple'}>Sign Up</Button>
          </VStack>
        </form>
      </Card>
    </Container>
  );
};

export default SignUp;
