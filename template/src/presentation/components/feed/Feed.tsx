import {FlashList} from '@shopify/flash-list';
import {observer} from 'mobx-react-lite';
import {Button, Divider, HStack, Text, View, VStack} from 'native-base';
import React, {FC} from 'react';
import FeedPost from 'src/domain/entities/Feed/FeedPost';

const Feed: FC<{data: FeedPost[]}> = ({data}) => {
    return (
        <FlashList
            estimatedItemSize={200}
            ItemSeparatorComponent={() => <Divider />}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => <ListItem post={item} />}
        />
    );
};

export default Feed;

const ListItem: FC<{post: FeedPost}> = observer(({post}) => {
    return (
        <View p="12px" mb="12px" alignItems="center">
            <VStack flex={1} space="12px">
                <Text fontWeight={600} fontSize={16}>
                    {post.title}
                </Text>
                <Text fontSize={14}>{post.body}</Text>
            </VStack>
            <HStack mt="12px" flex={1} space="8px" alignItems="center">
                <Button isDisabled={post.isMinRating} onPress={post.decreaseRating}>
                    -
                </Button>
                <Text
                    color={
                        post.rating === 0
                            ? 'black'
                            : post.rating > 0
                            ? 'green.800'
                            : 'red.500'
                    }
                    textAlign="center"
                    w="80px"
                    fontSize={25}>
                    {post.rating}
                </Text>

                <Button isDisabled={post.isMaxRating} onPress={post.increaseRating}>
                    +
                </Button>
            </HStack>
        </View>
    );
});
