import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DemoView from 'src/features/demo/presentation/DemoView';
import FeedView from 'src/features/feed';
import {RootStackParamsList} from 'src/navigation/root/RootStack.types';

const Stack = createNativeStackNavigator<RootStackParamsList>();
const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: true, headerBackTitleVisible: false}}>
            {/*TODO: Удалить экраны 'demo', добавить свои экраны*/}
            <Stack.Screen
                options={{
                    title: 'Завершение инициализации',
                }}
                name="demo"
                component={DemoView}
            />
            <Stack.Screen
                options={{
                    headerTitle: 'Новости',
                    headerShadowVisible: false,
                }}
                name="feed"
                component={FeedView}
            />
        </Stack.Navigator>
    );
};

export default RootStack;
