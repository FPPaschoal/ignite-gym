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
import { Input } from '@components/input';
import { Button } from '@components/Buttom';

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#121214' }}
    >
      <VStack flex={1} bg="$gray700" position="relative" pb="$4">
        <Image
          source={BackgroundImg}
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
              <Text color="$gray100" fontSize={'$sm'}>
                Treine sua mente e seu corpo
              </Text>
            </Center>
            <Center px="$6">
              <Heading
                color="$gray100"
                fontSize={'$xl'}
                mb={'$6'}
                fontFamily="$heading"
              >
                Crie sua Conta
              </Heading>
              <Input
                InputFieldProps={{
                  placeholder: 'Nome',
                }}
              />
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
              <Input
                InputFieldProps={{
                  placeholder: 'Confirme a senha',
                  type: 'password',
                  secureTextEntry: true,
                }}
              />
              <Button>Criar e acessar</Button>
            </Center>
          </View>

          <Center px="$6" mt={'$24'} gap={'$3'}>
            <Button GluestackButtonProps={{ variant: 'outline' }}>
              Voltar para o login
            </Button>
          </Center>
        </View>
      </VStack>
    </ScrollView>
  );
}
