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
import { Button } from '@components/Buttom';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate('SignUp');
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
            <Center my={'$32'} px="$6">
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
                Acesse sua Conta
              </Heading>
              <Input
                InputFieldProps={{
                  placeholder: 'E-mail',
                  autoCapitalize: 'none',
                }}
              />
              <Input
                InputFieldProps={{
                  placeholder: 'Senha',
                  type: 'password',
                  secureTextEntry: true,
                }}
              />
              <Button>Acessar</Button>
            </Center>
          </View>
          <Center px="$6" mt={'$24'} gap={'$3'}>
            <Text
              color="$coolGray100"
              fontSize={'$sm'}
              textAlign="center"
              mt={'$6'}
            >
              Ainda não tem acesso?
            </Text>
            <Button
              GluestackButtonProps={{
                variant: 'outline',
                onPress: handleNewAccount,
              }}
            >
              Criar conta
            </Button>
          </Center>
        </View>
      </VStack>
    </ScrollView>
  );
}
