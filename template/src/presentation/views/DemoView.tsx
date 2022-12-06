import {observer} from 'mobx-react-lite';
import {Center, Heading, HStack, ScrollView, Text, VStack} from 'native-base';
import React from 'react';

import DemoViewModel from '../viewModels/DemoViewModel';

const DemoView = observer(() => {
  const {steps} = DemoViewModel;
  return (
    <ScrollView pt="20px" px="16px">
      <Center flex={1}>
        <Heading mb="15px">Завершение инициализации</Heading>
      </Center>
      <Heading size="xs">
        Прежде чем начать работу над проектом,не забудьте зарезолвить все{' '}
        <Text color="blue.500">TODO</Text>, а именно:
      </Heading>

      <VStack mt="12px" space="5px">
        {steps.map((step, index) => (
          <HStack space="12px" alignItems="center">
            <Text fontSize={25}>{index}</Text>
            <Text>{step}</Text>
          </HStack>
        ))}
      </VStack>
    </ScrollView>
  );
});

export default DemoView;
