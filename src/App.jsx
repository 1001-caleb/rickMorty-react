import { Box, Text } from '@chakra-ui/react'
import ListCharacters from './components/ListCharacters'
function App() {

  return (
    <Box bgColor='blackAlpha.900'>
      <Text fontSize='2xl' color='white' align='center'>Rick and morty API</Text>
      <ListCharacters />
    </Box>
  )
}

export default App
