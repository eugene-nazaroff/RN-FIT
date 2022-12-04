import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import DemoView from '../../views/DemoView';
import {RootStackParamsList} from './RootStack.types';
const Stack = createNativeStackNavigator<RootStackParamsList>();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      {/*TODO: Удалить экран 'demo', добавить свои экраны*/}
      <Stack.Screen
        options={{title: 'Добро пожаловать в шаблон RN-FIT'}}
        name="demo"
        component={DemoView}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
