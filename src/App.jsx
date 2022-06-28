import { Box } from '@chakra-ui/react'
import ListCharacters from './components/ListCharacters'

function App() {

  return (
    <Box bgColor='blackAlpha.900'>
      <h1>Rick and morty API</h1>
      <ListCharacters />
    </Box>
  )
}

export default App
