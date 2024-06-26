import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { FlatList, HStack, Heading, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { useState } from 'react';

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'ombro',
  ]);
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terras',
  ]);
  const [groupSelected, setGroupSelected] = useState('Costas');

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise');
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item): any => item}
        renderItem={({ item }) => (
          <Group
            name={item as string}
            isActive={
              groupSelected.toLocaleUpperCase() ===
              (item as string).toLocaleUpperCase()
            }
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
        minHeight={'$10'}
      />

      <VStack px={'$8'}>
        <HStack justifyContent="space-between" mb={'$5'} alignItems="center">
          <Heading
            fontFamily="$heading"
            color="$coolGray200"
            fontSize="$md"
            lineHeight={'$2xl'}
          >
            Exercícios
          </Heading>

          <Text color="$coolGray200" fontSize="$sm" lineHeight={'$2xl'}>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item): any => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        />
      </VStack>
    </VStack>
  );
}
