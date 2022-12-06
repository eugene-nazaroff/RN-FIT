import {extendTheme} from 'native-base';

const theme = extendTheme({
    config: {
        useSystemColorMode: true,
        initialColorMode: 'dark',
    },
    colors: {
        primary: {
            50: '#ffe3ea',
            100: '#ffb3c0',
            200: '#fd8196',
            300: '#fc516d',
            400: '#fc2544',
            500: '#e3132a',
            600: '#b10b21',
            700: '#7f0517',
            800: '#4d000d',
            900: '#1e0003',
        },
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
