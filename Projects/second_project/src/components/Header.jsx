import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="blue"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer 
      isOpen={isOpen} 
      placement="left"
      onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>
            Music HUB
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme='blue'
                >
                    <Link to={'/'} >Home</Link>
                </Button>
                <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme='blue'
                >
                    <Link to={'/videos'} >Videos</Link>
                </Button>
                <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme='blue'
                >
                    <Link to={'/videos?category=free'} >Free Videos</Link>
                </Button>
                <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme='blue'
                >
                    <Link to={'/upload'} >Upload Videos</Link>
                </Button>
            </VStack>

            <HStack 
                position={'absolute'}
                bottom={'10'}
                left={'0'}
                width={'full'}
                justifyContent={'space-evenly'}
            >
            <Button
                onClick={onClose}
                colorScheme='blue'
                >
                    <Link to={'/login'} >Log In</Link>
                </Button>
            <Button
                onClick={onClose}
                variant={'outline'}
                colorScheme='blue'
                >
                    <Link to={'/signup'} >Sign Up</Link>
                </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
