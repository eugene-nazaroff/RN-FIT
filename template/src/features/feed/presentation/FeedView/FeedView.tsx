import {observer} from 'mobx-react-lite';
import {Flex} from 'native-base';
import React, {useMemo} from 'react';
import FeedViewModel from 'src/features/feed/presentation/FeedView/feedViewModel';

import FeedList from '../FeedList';

const FeedView = observer(() => {
    const {posts, isLoading} = useMemo(() => new FeedViewModel(), []);

    return (
        <Flex safeAreaBottom justifyContent="center" flex={1}>
            <FeedList data={posts} isLoading={isLoading} />
        </Flex>
    );
});

export default FeedView;
