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

export function SignIn() {
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
            <Center my={'$32'} px="$6">
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
              color="$gray100"
              fontSize={'$sm'}
              textAlign="center"
              mt={'$6'}
            >
              Ainda não tem acesso?
            </Text>
            <Button GluestackButtonProps={{ variant: 'outline' }}>
              Criar conta
            </Button>
          </Center>
        </View>
      </VStack>
    </ScrollView>
  );
}
