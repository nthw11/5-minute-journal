import { Flex, Box, Text } from '@chakra-ui/react'

const NotesArea = (props) => {

  const linedPaperStyle = {
    '.lined-paper': {
      'background-image': 'repeating-linear-gradient(white, white 24px, black 25px);',
      'height': '50px;',
      'width': '100%;',
    }
  }
  const lineHeight = '20px'
  const LinedPaperSVG = () => (
    <Box borderBottom={'1px'} borderColor={'#555'} height={`${lineHeight}`} >
    </Box>
  )
  return (
    <Flex height={'auto'} direction={'column'} justifyContent={'space-between'} overflow={'hidden'}>
      <Text fontSize={'large'} textAlign={'left'}>Notes</Text>
      {Array.from(Array(20).keys()).map((i) => {
        return (
          <Flex key={i} direction={'column'} justifyContent={'space-between'}  >
            <LinedPaperSVG />
          </Flex>
        )
      }
      )}

    </Flex>
  )
}

export default NotesArea
