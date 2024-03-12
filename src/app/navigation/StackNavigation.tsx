import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostsScreen } from "../../modules/posts/presentation/PostsScreen";
import { PostScreen } from "../../modules/posts/presentation/PostScreen";
import { RouteProp, useNavigation } from "@react-navigation/native";

type PostsScreensParamList = {
  posts: undefined;
  post: { id: string }
}

const Stack = createNativeStackNavigator<PostsScreensParamList>()

export const useAppNavigation = () => useNavigation<NativeStackNavigationProp<PostsScreensParamList>>()



export type PostRouteProp = RouteProp<PostsScreensParamList, "post">

export const AppStack = () => {
  return <Stack.Navigator>
    <Stack.Screen name="posts" options={{ title: "Posts", }} component={PostsScreen} />
    <Stack.Screen name="post" options={{ presentation: "modal", title: "" }} component={PostScreen} />
  </Stack.Navigator>
}