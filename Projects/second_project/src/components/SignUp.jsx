import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return <Container
          maxW={'container.xl'}
          h={'100vh'}
          p={'16'}
          >

          <form>
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
            >
            <Heading textAlign={'center'}>Music HUB</Heading>
            <Avatar
              alignSelf={'center'}
              boxSize={'20'}
            />

            <Input 
            placeholder={'Name'}
            type={'text'}
            required
            />
            <Input 
            placeholder={'Email'}
            type={'email'}
            required
            />
            <Input 
            placeholder={'Password'}
            type={'password'}
            required
            />


            <Button
              colorScheme={'blue'}
              type={'submit'}
            >
            Sign Up
            </Button>
            <Text textAlign={'right'}>
            Already a member?{' '}
            <Button
            variant={'link'}
            colorScheme={'blue'}
            >
              <Link to={'/login'}>Log In</Link>
            </Button>
            </Text>
            </VStack>
          </form>

  </Container>
}



export default SignUp