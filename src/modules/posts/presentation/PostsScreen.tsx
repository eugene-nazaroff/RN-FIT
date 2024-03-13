import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useAppNavigation } from '../../../app/navigation/StackNavigation';
import { usePostsInjection } from '../DI/types';

export const PostsScreen = observer(() => {

    const viewModel = usePostsInjection("PostsViewModel")

    useEffect(() => {
        viewModel.loadInitialPosts()
    }, [])

    const navigation = useAppNavigation()

    return <View style={{ flex: 1, padding: 16 }}>
        {viewModel.isLoading ? <ActivityIndicator size='large' /> :
            <FlatList refreshing={viewModel.isRefreshing} onRefresh={() => viewModel.refresh()} showsVerticalScrollIndicator={false} data={viewModel.posts} renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => {
                    navigation.navigate("post", { id: item.id })
                }} style={{ borderWidth: 1, borderRadius: 4, marginBottom: 6, padding: 4 }} key={item.title}>
                    <Text style={{ fontWeight: "600", textTransform: "uppercase", marginBottom: 2, }}>{item.title}</Text>
                    <Text style={{ fontSize: 12 }}>{item.body}</Text>
                </TouchableOpacity>
            }} />}
    </View >


})