import {extendTheme} from 'native-base';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
  components: {
    Text: {
      baseStyle: {
        color: 'black',
        _dark: {
          color: '#fff',
        },
      },
    },
  },
});

export default theme;
