import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { VStack, Heading, Text } from '@gluestack-ui/themed';
import { useState } from 'react';
import { SectionList } from 'react-native';

interface ExerciseSection {
  title: string;
  data: string[];
}

export function History() {
  const [exercises, setExercises] = useState<ExerciseSection[]>([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '27.08.22',
      data: ['Puxada frontal'],
    },
  ]);

  const sections = exercises.map((exercise) => ({
    title: exercise.title,
    data: exercise.data.map((item) => ({ name: item })),
  }));

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            fontFamily="$heading"
            color="$coolGray200"
            fontSize="$md"
            mt={'$10'}
            mb={'$3'}
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color="$coolGray100" textAlign="center">
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
