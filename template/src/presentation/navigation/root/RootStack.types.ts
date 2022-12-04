//TODO: Настроить типизацию
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  demo: undefined; //TODO: delete me
};

//use it for annotating useNavigation hook
export type RootNavigationProp = NativeStackNavigationProp<RootStackParamsList>;
