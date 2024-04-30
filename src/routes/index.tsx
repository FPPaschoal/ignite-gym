import { Box, useToken } from '@gluestack-ui/themed';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const theme = DefaultTheme;

  const bgColor = useToken('colors', 'coolGray700');

  theme.colors.background = bgColor;
  return (
    <Box flex={1} bg="$coolGray700">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
}
