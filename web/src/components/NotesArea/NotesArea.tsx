import { Flex, Box, Text } from '@chakra-ui/react'

const NotesArea = (props) => {
  const lineHeight = props.lineHeight || '20px'
  const header = props.header || 'Notes'
  const rows = props.rows || 20
  const headerSize = props.headerSize || 'large'
  const linedPaperStyle = {
    '.lined-paper': {
      'background-image': 'repeating-linear-gradient(white, white 24px, black 25px);',
      'height': `${lineHeight}px;`,
      'width': '100%;',
    }
  }
  const LinedPaperSVG = () => (
    <Box borderBottom={'1px'} borderColor={'#555'} height={`${lineHeight}`} >
    </Box>
  )
  return (
    <Flex height={'auto'} direction={'column'} overflow={'hidden'}>
      <Text fontSize={headerSize} textAlign={'left'} marginBottom={'-10px'} textTransform={'uppercase'} >{header}</Text>
      {Array.from(Array(rows).keys()).map((i) => {
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
