import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from './theme';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
