import {FlashList} from '@shopify/flash-list';
import {Divider, Spinner} from 'native-base';
import React, {FC} from 'react';
import FeedCell from 'src/features/feed/presentation/FeedList/FeedCell';

import FeedPost from '../../domain/entities/FeedPost';

const FeedList: FC<{data: Array<FeedPost>; isLoading: boolean}> = ({data, isLoading}) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <FlashList
            estimatedItemSize={200}
            ItemSeparatorComponent={() => <Divider />}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => <FeedCell post={item} />}
        />
    );
};

export default FeedList;
