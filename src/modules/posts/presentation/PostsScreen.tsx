import { useInjection } from 'inversify-react';
import { PostsViewModel } from './PostsViewModel';
import { ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useAppNavigation } from '../../../app/navigation/StackNavigation';

export const PostsScreen = observer(() => {

    const viewModel = useInjection<PostsViewModel>('PostsViewModel');

    useEffect(() => {
        viewModel.getPosts()
    }, [])

    const navigation = useAppNavigation()

    return <View style={{ flex: 1, padding: 16 }}>
        {viewModel.isLoading ? <ActivityIndicator size='large' /> :
            <FlatList showsVerticalScrollIndicator={false} data={viewModel.posts} renderItem={({ item, index }) => {
                return <TouchableOpacity onPress={() => {
                    navigation.navigate("post", { id: item.id })

                }} style={{ borderWidth: 1, borderRadius: 4, marginBottom: 6, padding: 4 }} key={item.id}>
                    <Text style={{ fontWeight: "600", textTransform: "uppercase", marginBottom: 2, }}>{item.title}</Text>
                    <Text style={{ fontSize: 12 }}>{item.body}</Text>
                </TouchableOpacity>
            }} />}
    </View >


})