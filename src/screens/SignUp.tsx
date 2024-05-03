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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: yup
    .string()
    .required('Confirme a senha.')
    .oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere'),
});

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

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
                render={({ field: { onChange, value } }) => (
                  <Input
                    InputFieldProps={{
                      placeholder: 'Nome',
                      onChangeText: onChange,
                      value: value,
                    }}
                    errorMessage={errors.name?.message}
                    isInvalid={Boolean(errors.name)}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    InputFieldProps={{
                      placeholder: 'E-mail',
                      autoCapitalize: 'none',
                      onChangeText: onChange,
                      value: value,
                      keyboardType: 'email-address',
                    }}
                    errorMessage={errors.email?.message}
                    isInvalid={Boolean(errors.email)}
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
                    errorMessage={errors.password?.message}
                    isInvalid={Boolean(errors.password)}
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
                    errorMessage={errors.password_confirm?.message}
                    isInvalid={Boolean(errors.password_confirm)}
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
