import { Text, Pressable } from '@gluestack-ui/themed';
import { PressableProps } from 'react-native';
type Props = PressableProps & {
  name: string;
  isActive?: boolean;
};

export function Group({ name, isActive = false, ...rest }: Props) {
  return (
    <Pressable
      mr={'$3'}
      w={'$24'}
      h={'$10'}
      bg="$coolGray600"
      rounded="$md"
      justifyContent="center"
      states={{ active: isActive }}
      alignItems="center"
      overflow="hidden"
      $active={{ borderColor: '$green500', borderWidth: 1 }}
      {...rest}
    >
      <Text
        color={isActive ? '$green500' : '$coolGray200'}
        textTransform="uppercase"
        fontSize={'$xs'}
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
}
