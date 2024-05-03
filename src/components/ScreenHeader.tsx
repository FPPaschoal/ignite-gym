import { Center, Heading } from '@gluestack-ui/themed';

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg="$coolGray600" pb={'$6'} pt={'$16'}>
      <Heading fontFamily="$heading" color="$coolGray100" fontSize="$xl">
        {title}
      </Heading>
    </Center>
  );
}
