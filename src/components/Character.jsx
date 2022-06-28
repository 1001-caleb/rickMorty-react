import React from 'react'
import { Image, Flex, Text } from '@chakra-ui/react'

export default function Character({ character }) {
  return (
    <Flex
      boxShadow='md'
      w={[120, 200, 300]}
      h={[200, 300, 400]}
      direction='column'
      justify='center'
      align='center'
      m='auto'
      bgColor='whiteAlpha.200' >
      
      <Image
        borderRadius='full'
        w={[100, 150, 200]}
        src={character.image}
        alt={character.name}
      />

      <Text
        fontSize={['xl', '2xl']}
        color='white'
        textAlign='center'> {character.name}
      </Text>
    </Flex>
  )
}
