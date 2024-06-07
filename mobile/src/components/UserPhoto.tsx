import { Image } from '@gluestack-ui/themed';

type Props = React.ComponentProps<typeof Image>;

export function UserPhoto({ size, ...rest }: Props) {
  return <Image rounded={'$full'} borderColor="$coolGray400" {...rest} />;
}
