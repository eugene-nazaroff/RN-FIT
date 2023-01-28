import {FlashList} from '@shopify/flash-list';
import {observer} from 'mobx-react-lite';
import {Button, Divider, HStack, Text, View, VStack} from 'native-base';
import React, {FC} from 'react';
import FeedCellViewModel from 'src/presentation/viewModels/feed/feedCellViewModel';

const Feed: FC<{data: FeedCellViewModel[]}> = ({data}) => {
    return (
        <FlashList
            estimatedItemSize={200}
            ItemSeparatorComponent={() => <Divider />}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => <FeedCell vm={item} />}
        />
    );
};

export default Feed;

const FeedCell: FC<{vm: FeedCellViewModel}> = observer(({vm: vm}) => {
    return (
        <View p="12px" mb="12px" alignItems="center">
            <VStack flex={1} space="12px">
                <Text fontWeight={600} fontSize={16}>
                    {vm.title}
                </Text>
                <Text fontSize={14}>{vm.body}</Text>
            </VStack>
            <HStack mt="12px" flex={1} space="8px" alignItems="center">
                <Button onPress={() => vm.changeRating('subtract')}>-</Button>
                <Text
                    color={
                        vm.rating === 0
                            ? 'black'
                            : vm.rating > 0
                            ? 'green.800'
                            : 'red.500'
                    }
                    textAlign="center"
                    w="80px"
                    fontSize={25}>
                    {vm.rating}
                </Text>
                <Button onPress={() => vm.changeRating('add')}>+</Button>
            </HStack>
        </View>
    );
});
