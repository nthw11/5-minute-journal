import { Box } from "@chakra-ui/react"

const squareSvg = (size, color) => {

  return (


    <div>
    <svg width="50" height="50" viewBox="0 0 50 50">
      <rect width="50" height="50" style={{ fill: 'none' }} stroke={'black'} />
    </svg>
  </div>


)
}

export default squareSvg
