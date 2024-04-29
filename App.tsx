import { View, StatusBar } from 'react-native';
import { Text, GluestackUIProvider } from '@gluestack-ui/themed';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { config } from '@gluestack-ui/config';
import { SignUp } from '@screens/Signup';

const newConfig = {
  ...config,
  tokens: {
    ...config.tokens,
    colors: {
      ...config.tokens.colors,
      green700: '#00875F',
      green500: '#00B37E',
      gray700: '#121214',
      gray600: '#202024',
      gray500: '#29292E',
      gray400: '#323238',
      gray300: '#7C7C8A',
      gray200: '#C4C4CC',
      gray100: '#E1E1E6',
      red500: '#F75A68',
    },
    fonts: {
      ...config.tokens.fonts,
      heading: 'Roboto_700Bold',
      body: 'Roboto_400Regular',
    },
    space: {
      ...config.tokens.space,
      '14': 56,
      '33': 148,
    },
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <GluestackUIProvider config={newConfig}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignUp></SignUp> : <Loading />}
    </GluestackUIProvider>
  );
}
