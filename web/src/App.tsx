import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const theme = extendTheme({
  fonts: {
    heading: 'Jost, sans-serif',
    body: 'Jost, sans-serif',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: '#555', // sets the default text color
        lineHeight: 'base', // optional, adjust line height to suit your needs
      },
    },
  },
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle">
      <ChakraProvider theme={theme}>
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
