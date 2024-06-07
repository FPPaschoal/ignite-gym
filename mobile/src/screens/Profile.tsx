import {
  Center,
  ScrollView,
  Text,
  Toast,
  ToastTitle,
  VStack,
  useToast,
  useStyled,
} from '@gluestack-ui/themed';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';

import { Input } from '@components/Input';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native';
import { Heading } from '@gluestack-ui/themed';
import { Button } from '@components/Button';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';

export function Profile() {
  const toast = useToast();
  const { space } = useStyled().config.tokens;

  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/FPPaschoal.png'
  );
  async function handleUserPhotoSelected() {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    });

    if (photoSelected.canceled) {
      return;
    }
    if (photoSelected.assets[0].uri) {
      const photoInfo = await FileSystem.getInfoAsync(
        photoSelected.assets[0].uri,
        { size: true }
      );

      if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
        return toast.show({
          placement: 'top',
          render: ({ id }) => {
            const toastId = 'toast-' + id;
            return (
              <Toast
                bg="$error600"
                nativeID={toastId}
                p="$4"
                gap={'$4'}
                maxWidth={'$4/5'}
                alignSelf="center"
                justifyContent="center"
                alignItems="center"
                mt={'$10'}
              >
                <MaterialIcons name="warning" color={'white'} size={space[6]} />
                <VStack space="xs">
                  <ToastTitle color="$textLight50">
                    Essa imagem é muito grande. Escolha uma de até 5MB
                  </ToastTitle>
                </VStack>
              </Toast>
            );
          },
        });
      }

      setUserPhoto(photoSelected.assets[0].uri);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={'$6'} px={'$10'}>
          <UserPhoto
            w={'$32'}
            h={'$32'}
            source={{ uri: userPhoto }}
            alt="Imagem do usuário"
          />
          <TouchableOpacity onPress={handleUserPhotoSelected}>
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
          <Heading
            fontFamily="$heading"
            color="$coolGray200"
            fontSize="$md"
            mb={'$2'}
          >
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
