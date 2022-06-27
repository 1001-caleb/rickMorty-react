import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

function App() {

  useEffect(() => {
    async function fecthData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data.results)
    }
    fecthData()
  }, [])

  return (
    <Box >
      Rick and mory API
    </Box>
  )
}

export default App
