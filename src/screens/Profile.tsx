import { Center, ScrollView, Text, VStack } from '@gluestack-ui/themed';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';

import { Input } from '@components/Input';

import { TouchableOpacity } from 'react-native';
import { Heading } from '@gluestack-ui/themed';
import { Button } from '@components/Buttom';

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={'$6'} px={'$10'}>
          <UserPhoto
            w={'$32'}
            h={'$32'}
            source={{ uri: 'https://github.com/FPPaschoal.png' }}
            alt="Imagem do usuário"
          />
          <TouchableOpacity>
            <Text
              color="$green500"
              fontWeight="bold"
              fontSize="$md"
              mt={'$2'}
              mb={'$8'}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input
            GluestackInputProps={{
              bg: '$coolGray600',
            }}
            InputFieldProps={{
              placeholder: 'Nome',
            }}
          />

          <Input
            GluestackInputProps={{
              bg: '$coolGray600',
              isDisabled: true,
            }}
            InputFieldProps={{
              placeholder: 'E-mail',
            }}
          />
        </Center>
        <VStack px={'$10'} mt={'$12'} mb={'$9'}>
          <Heading color="$coolGray200" fontSize="$md" mb={'$2'}>
            Alterar senha
          </Heading>

          <Input
            GluestackInputProps={{ bg: '$coolGray600' }}
            InputFieldProps={{
              placeholder: 'Senha antiga',
              secureTextEntry: true,
            }}
          />

          <Input
            GluestackInputProps={{ bg: '$coolGray600' }}
            InputFieldProps={{
              placeholder: 'Nova senha',
              secureTextEntry: true,
            }}
          />

          <Input
            GluestackInputProps={{ bg: '$coolGray600' }}
            InputFieldProps={{
              placeholder: 'Confirme a nova senha',
              secureTextEntry: true,
            }}
          />

          <Button
            GluestackButtonProps={{
              mt: '$4',
            }}
          >
            Atualizar
          </Button>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
