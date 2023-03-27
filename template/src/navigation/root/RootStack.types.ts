//TODO: Настроить типизацию
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamsList = {
    demo: undefined; //TODO: delete me
    feed: undefined; //TODO: delete me
    test1: undefined; //TODO: delete me
    test2: undefined; //TODO: delete me
};

//use it for annotating useNavigation hook
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamsList>;
