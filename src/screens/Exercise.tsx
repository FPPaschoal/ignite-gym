import {
  Box,
  Center,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  useStyled,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import BodySvg from '@assets/body.svg';
import { Button } from '@components/Button';

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { space, colors } = useStyled().config.tokens;

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <VStack flex={1}>
      <VStack px={'$8'} bg="$coolGray600" pt={'$12'}>
        <TouchableOpacity onPress={handleGoBack}>
          <MaterialIcons
            name="arrow-back"
            color={colors.green500}
            size={space[6]}
          />
        </TouchableOpacity>
        <HStack
          justifyContent="space-between"
          mt={'$4'}
          mb={'$8'}
          alignItems="center"
        >
          <Heading
            color="$coolGray100"
            fontSize="$lg"
            fontFamily="$heading"
            flexShrink={1}
          >
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="$coolGray200" ml={'$1'} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={'$8'}>
          <Image
            w="$full"
            h={'$80'}
            source={{
              uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg',
            }}
            alt="Nome do exercício"
            mb={'$3'}
            resizeMode="cover"
            rounded="$lg"
          />

          <Box bg="$coolGray600" rounded="$md" pb={'$4'} px={'$4'}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={'$6'}
              mt={'$5'}
            >
              <HStack>
                <SeriesSvg />
                <Text color="$coolGray200" ml="$2">
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="$coolGray200" ml="$2">
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button>Marcar como realizado</Button>
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
