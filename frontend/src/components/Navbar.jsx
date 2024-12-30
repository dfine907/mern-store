import React from 'react';
import {
  Button,
  Container,
  Flex,
  Text,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';
import { MdOutlineLightMode } from 'react-icons/md';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
          fontSize={{ base: '22', sm: '28' }}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          textAlign={'center'}
          color={'purple.400'}
        >
          <Link to={'/'}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Link to={'/create'}>
            <Button>
              <FaPlusSquare />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            <MdOutlineLightMode />
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
