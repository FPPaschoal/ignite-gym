import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px={'$5'}
      py={'$4'}
      mb={'$3'}
      bg="$coolGray600"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={'$5'} flex={1}>
        <Heading
          fontFamily="$heading"
          color="white"
          fontSize="$md"
          textTransform="capitalize"
          numberOfLines={1}
        >
          Costas
        </Heading>

        <Text color="$coolGray100" fontSize="$lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color="$coolGray300" fontSize="$md">
        08:56
      </Text>
    </HStack>
  );
}
