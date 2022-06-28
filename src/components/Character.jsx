import React from 'react'
import { Image, Flex, Text } from '@chakra-ui/react'

export default function Character({ character }) {
  return (
    <Flex
      boxShadow='md'
      w={[120, 200, 300]}
      h={[230, 300, 400]}
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
      <Text
        fontSize={['lg', 'xl']}
        color='green.500'
        textAlign='center'> {character.status}
      </Text>
      <Text
        fontSize={['lg', 'xl']}
        color='green.100'
        textAlign='center'> {character.species}
      </Text>
    </Flex>
  )
}
