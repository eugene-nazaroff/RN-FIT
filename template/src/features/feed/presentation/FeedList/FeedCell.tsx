import {observer} from 'mobx-react-lite';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    Box,
    Divider,
    HStack,
    Image,
    Pressable,
    Text,
    View,
    VStack,
} from 'native-base';
import React from 'react';
import {FC, useMemo} from 'react';
import FeedPost from 'src/features/feed/domain/entities/FeedPost';
import FeedCellViewModel from 'src/features/feed/presentation/FeedList/feedCellViewModel';

const FeedCell: FC<{post: FeedPost}> = observer(({post}) => {
    const vm = useMemo(() => new FeedCellViewModel(post), [post]);
    return (
        <View pb="16px" shadow={5} bgColor="#fff" mb="16px">
            <HStack p="12px" space="8px">
                <Image
                    source={{uri: 'https://via.placeholder.com/600/92c952'}}
                    alt="photo"
                    size="24px"
                    rounded="full"
                />
                <VStack>
                    <Text fontSize={12}>UserName</Text>
                    <Text color="#ccc" fontSize={12}>
                        {vm.dateString}
                    </Text>
                </VStack>
            </HStack>
            <VStack space="7px">
                <Text p="12px" fontSize={18} fontWeight="bold">
                    {vm.title}
                </Text>
                <Text p="12px">{vm.body}</Text>
                <Image
                    source={{uri: 'https://via.placeholder.com/600/92c952'}}
                    alt="photo"
                    w="100%"
                    h="250px"
                />
                <HStack mt="24px" px="12px" space="12px">
                    {vm.tags.map(tag => {
                        return (
                            <Box
                                key={tag}
                                bgColor="gray.200"
                                px="4px"
                                py="2px"
                                rounded="5px">
                                <Text fontSize={12} color="gray.500">
                                    {tag}
                                </Text>
                            </Box>
                        );
                    })}
                </HStack>
            </VStack>
            <Divider my="24px" />
            <HStack justifyContent="space-between" px="18px">
                <Box w="60px">
                    <HStack
                        justifyContent="space-between"
                        alignItems="center"
                        space="15px">
                        <Pressable onPress={() => vm.changeRating('add')}>
                            <ArrowUpIcon />
                        </Pressable>
                        <Text>{vm.rating}</Text>
                        <Pressable onPress={() => vm.changeRating('subtract')}>
                            <ArrowDownIcon />
                        </Pressable>
                    </HStack>
                </Box>
            </HStack>
        </View>
    );
});
export default FeedCell;
