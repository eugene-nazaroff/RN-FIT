import {NavigationContainer} from '@react-navigation/native';
import {Button, Flex, NativeBaseProvider, Text} from 'native-base';
import React from 'react';
import {useColorScheme} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import RootStack from 'src/presentation/navigation/root/RootStack';
import {darkTheme} from 'src/presentation/navigation/theme/darkTheme';
import {defaultTheme} from 'src/presentation/navigation/theme/defaultTheme';
import theme from 'src/presentation/theme/theme';

const App = () => {
    const scheme = useColorScheme();

    return (
        <NativeBaseProvider theme={theme}>
            <ErrorBoundary
                FallbackComponent={({resetError}) => {
                    return (
                        <Flex px="16px" safeArea justifyContent="center" flex={1}>
                            <Text alignSelf="center">Что-то пошло не так</Text>
                            <Button onPress={resetError}>Попробовать снова</Button>
                        </Flex>
                    );
                }}>
                <NavigationContainer
                    theme={scheme === 'light' ? defaultTheme : darkTheme}>
                    <RootStack />
                </NavigationContainer>
            </ErrorBoundary>
        </NativeBaseProvider>
    );
};

export default gestureHandlerRootHOC(App);
