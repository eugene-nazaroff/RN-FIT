import {Center, Heading, ScrollView, Text, VStack} from 'native-base';
import React from 'react';

const DemoView = () => {
  return (
    <ScrollView pt="20px" px="16px">
      <Center flex={1}>
        <Heading mb="15px">
          Поздравляем с успешной инициализацией проекта с помощью шаблона
          RN-FIT!
        </Heading>
      </Center>
      <Heading size="xs">
        Прежде чем начать работу над проектом,не забудьте зарезолвить все{' '}
        <Text color="blue.500">TODO</Text>, а именно:
      </Heading>

      <VStack mt="12px" space="5px">
        <Text>1. Настроить api-клиент (services/APIService)</Text>
        <Text>2. Настроить тему native-base (presentation/theme)</Text>
        <Text>
          2. Настроить тему react-navigation (presentation/navigation/theme)
        </Text>
        <Text>3. Настроить навигацию (navigation)</Text>
      </VStack>
    </ScrollView>
  );
};

export default DemoView;
