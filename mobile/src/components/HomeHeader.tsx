import { HStack, Heading, Text, VStack, useStyled } from '@gluestack-ui/themed';
import { UserPhoto } from './UserPhoto';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
  const { colors, space } = useStyled().config.tokens;
  return (
    <HStack bg="$coolGray600" pt="$16" pb="$5" px="$8" alignItems="center">
      <UserPhoto
        w={'$16'}
        h={'$16'}
        source={{ uri: 'https://github.com/FPPaschoal.png' }}
        alt="Imagem do usuário"
        mr="$4"
      />
      <VStack flex={1}>
        <Text color="$coolGray100" fontSize={'$md'}>
          Olá,
        </Text>
        <Heading fontFamily="$heading" color="$coolGray100" fontSize={'$md'}>
          Felipe
        </Heading>
      </VStack>
      <TouchableOpacity>
        <MaterialIcons
          name="logout"
          size={space[7]}
          color={colors.coolGray200}
        />
      </TouchableOpacity>
    </HStack>
  );
}
