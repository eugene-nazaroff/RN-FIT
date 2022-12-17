import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FeedView from 'src/presentation/views/FeedView';

import DemoView from '../../views/DemoView';
import {RootStackParamsList} from './RootStack.types';
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
            <Stack.Screen options={{title: 'Новости'}} name="feed" component={FeedView} />
        </Stack.Navigator>
    );
};

export default RootStack;
