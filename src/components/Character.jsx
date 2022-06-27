import React from 'react'
import { Box } from '@chakra-ui/react'

export default function Character({character}) {
  return (
    <Box >
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </Box>
  )
}
