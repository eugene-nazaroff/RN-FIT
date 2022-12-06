import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {useColorScheme} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import RootStack from 'src/presentation/navigation/root/RootStack';
import {darkTheme} from 'src/presentation/navigation/theme/darkTheme';
import {defaultTheme} from 'src/presentation/navigation/theme/defaultTheme';
import theme from 'src/presentation/theme/theme';

const App = () => {
    const scheme = useColorScheme();

    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer theme={scheme === 'light' ? defaultTheme : darkTheme}>
                <RootStack />
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

export default gestureHandlerRootHOC(App);
