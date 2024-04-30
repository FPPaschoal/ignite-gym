import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { FlatList, HStack, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';

export function Home() {
  const [groupSelected, setGroupSelected] = useState('Costas');
  const [groups, setGroups] = useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'ombro',
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item): any => item}
        renderItem={({ item }) => (
          <Group
            name={item as string}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item as string)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
        my={'$10'}
        maxHeight={'$10'}
      />
    </VStack>
  );
}
