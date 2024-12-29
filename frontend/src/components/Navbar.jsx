import { Box, Button, Container, Flex, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)'> 

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
            // bgGradient={'linear(to-r, cyan.400, blue.500)'}
            // bgClip={'text'}
           color={'purple.400'}
          >
            <Link to={'/'}>Product Store 🛒</Link>
          </Text>
          <HStack spacking={2} alignItems={'center'}>
            <Link to={"/create"}>
            <Button>
            Button
            </Button>
            </Link>

          </HStack>


        </Flex>
      </Container>

      </Box>
    
  )
}

export default Navbar
