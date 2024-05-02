import {
  VStack,
  View,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
} from '@gluestack-ui/themed';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp({
    name,
    email,
    password,
    password_confirm,
  }: FormDataProps) {
    console.log({ name, email, password, password_confirm });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} position="relative" pb="$4">
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          flex={1}
          resizeMode="contain"
          position="absolute"
          top={-150}
          size="full"
          alt=""
        />
        <View style={{ flex: 1, justifyContent: 'space-between' }} mb={'$12'}>
          <View>
            <Center my={'$24'} px="$6">
              <LogoSvg />
              <Text color="$coolGray100" fontSize={'$sm'}>
                Treine sua mente e seu corpo
              </Text>
            </Center>
            <Center px="$6">
              <Heading
                color="$coolGray100"
                fontSize={'$xl'}
                mb={'$6'}
                fontFamily="$heading"
              >
                Crie sua Conta
              </Heading>
              <Controller
                control={control}
                name="name"
                rules={{
                  required: 'Informe o nome.',
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    InputFieldProps={{
                      placeholder: 'Nome',
                      onChangeText: onChange,
                      value: value,
                    }}
                  />
                )}
              />
              <Text color="white">{errors.name?.message}</Text>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Informe o email.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'E-mail inválido',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    InputFieldProps={{
                      placeholder: 'E-mail',
                      autoCapitalize: 'none',
                      onChangeText: onChange,
                      value: value,
                      keyboardType: 'email-address',
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    InputFieldProps={{
                      placeholder: 'Senha',
                      type: 'password',
                      secureTextEntry: true,
                      onChangeText: onChange,
                      value: value,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="password_confirm"
                render={({ field: { onChange, value } }) => (
                  <Input
                    InputFieldProps={{
                      placeholder: 'Confirme a senha',
                      type: 'password',
                      secureTextEntry: true,
                      onChangeText: onChange,
                      value: value,
                      returnKeyType: 'send',

                      onSubmitEditing: () => handleSubmit(handleSignUp),
                    }}
                  />
                )}
              />

              <Button
                GluestackButtonProps={{
                  onPress: handleSubmit(handleSignUp),
                }}
              >
                Criar e acessar
              </Button>
            </Center>
          </View>

          <Center px="$6" mt={'$24'} gap={'$3'}>
            <Button
              GluestackButtonProps={{
                variant: 'outline',
                onPress: handleGoBack,
              }}
            >
              Voltar para o login
            </Button>
          </Center>
        </View>
      </VStack>
    </ScrollView>
  );
}
