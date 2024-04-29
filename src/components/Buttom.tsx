import {
  ButtonSpinner,
  ButtonText,
  Button as GluestackButton,
} from '@gluestack-ui/themed';

interface ButtonProps {
  GluestackButtonProps?: React.ComponentProps<typeof GluestackButton> & {
    variant?: 'outline' | 'solid';
  };
  ButtonTextProps?: React.ComponentProps<typeof ButtonText>;
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  isLoading = false,
  GluestackButtonProps,
  ButtonTextProps,
  children,
}: ButtonProps) {
  return (
    <GluestackButton
      w="$full"
      h={56}
      rounded={'$sm'}
      borderWidth={GluestackButtonProps?.variant === 'outline' ? 1 : 0}
      borderColor="$green500"
      bg={
        GluestackButtonProps?.variant === 'outline'
          ? 'transparent'
          : '$green700'
      }
      $active-bgColor={
        GluestackButtonProps?.variant === 'outline' ? '$gray500' : '$green500'
      }
      {...GluestackButtonProps}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <ButtonText
          color={
            GluestackButtonProps?.variant === 'outline' ? '$green500' : '$white'
          }
          fontFamily="$heading"
          fontSize="$sm"
          {...ButtonTextProps}
        >
          {children}
        </ButtonText>
      )}
    </GluestackButton>
  );
}
