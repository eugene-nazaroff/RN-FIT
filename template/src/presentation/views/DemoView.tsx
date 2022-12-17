import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {Button, Center, Heading, HStack, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import {RootStackNavigationProp} from 'src/presentation/navigation/root/RootStack.types';

import DemoViewModel from '../viewModels/DemoViewModel';

const DemoView = observer(() => {
    const {steps} = DemoViewModel;

    const {navigate} = useNavigation<RootStackNavigationProp>();

    return (
        <ScrollView scrollEnabled={false} pt="20px" px="16px">
            <Center flex={1}>
                <Heading mb="15px">Завершение инициализации</Heading>
            </Center>

            <Heading size="xs">
                Прежде чем начать работу над проектом,не забудьте зарезолвить все{' '}
                <Text color="blue.500">TODO</Text>, а именно:
            </Heading>

            <VStack mt="12px" space="5px">
                {steps.map((step, index) => (
                    <HStack key={`step# ${index}`} space="12px" alignItems="center">
                        <Text fontSize={25}>{index}</Text>
                        <Text>{step}</Text>
                    </HStack>
                ))}
            </VStack>

            <Button onPress={() => navigate('feed')}>Посмотреть Демо-экран</Button>
        </ScrollView>
    );
});

export default DemoView;
