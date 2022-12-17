import {observer} from 'mobx-react-lite';
import {Flex} from 'native-base';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feed from 'src/presentation/components/feed/Feed';
import feedViewModel from 'src/presentation/viewModels/feed/feedViewModel';

const FeedView = observer(() => {
    const {posts, getPosts} = feedViewModel;

    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <SafeAreaView edges={['bottom']} style={{flex: 1}}>
            <Flex flex={1} px="16px">
                <Feed data={posts} />
            </Flex>
        </SafeAreaView>
    );
});

export default FeedView;
