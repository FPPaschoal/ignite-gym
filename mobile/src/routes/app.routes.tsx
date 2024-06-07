import { Platform } from 'react-native';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useToken, useStyled } from '@gluestack-style/react';
import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Exercise } from '@screens/Exercise';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';

type AppRoutes = {
  home: undefined;
  profile: undefined;
  exercise: undefined;
  history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { colors, space } = useStyled().config.tokens;

  const iconSize = space[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green500,
        tabBarInactiveTintColor: colors.coolGray200,
        tabBarStyle: {
          backgroundColor: colors.coolGray600,
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 96 : 'auto',
          paddingBottom: space[10],
          paddingTop: space[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon(props) {
            return (
              <HomeSvg fill={props.color} width={iconSize} height={iconSize} />
            );
          },
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon(props) {
            return (
              <HistorySvg
                fill={props.color}
                width={iconSize}
                height={iconSize}
              />
            );
          },
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon(props) {
            return (
              <ProfileSvg
                fill={props.color}
                width={iconSize}
                height={iconSize}
              />
            );
          },
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
