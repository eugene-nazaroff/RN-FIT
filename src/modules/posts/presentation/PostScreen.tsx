import { useInjection } from 'inversify-react';
import { PostViewModel } from './PostViewModel';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import { useEffect } from 'react';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRoute } from '@react-navigation/native';
import { PostRouteProp, useAppNavigation } from '../../../app/navigation/StackNavigation';

export const PostScreen = observer(() => {

    const { id } = useRoute<PostRouteProp>().params


    const navigation = useAppNavigation()

    const viewModel = useInjection<PostViewModel>('PostViewModel');

    useEffect(() => {
        viewModel.getPost(id)

    }, [])

    useEffect(() => {
        navigation.setOptions({ title: viewModel.post?.title })
    }, [viewModel.post])

    return <View style={{ flex: 1, padding: 16 }}>
        {viewModel.isLoading ? <ActivityIndicator size='large' /> :
            viewModel.post && <View>
                <Text>{viewModel.post.title}</Text>



            </View>}
    </View >


})