import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {Flex} from 'native-base';
import React, {useCallback, useContext} from 'react';
import Feed from 'src/presentation/components/feed/Feed';
import feedViewModel from 'src/presentation/viewModels/feed/feedViewModel';

const FeedView = observer(() => {
    const {posts, isLoading, getPosts} = useContext(feedViewModel);

    useFocusEffect(
        useCallback(() => {
            getPosts();
        }, [getPosts]),
    );

    return (
        <Flex safeAreaBottom justifyContent="center" flex={1}>
            <Feed data={posts} isLoading={isLoading} />
        </Flex>
    );
});

export default FeedView;
