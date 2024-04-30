import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';

interface InputProps {
  GluestackInputProps?: React.ComponentProps<typeof GluestackInput>;
  InputFieldProps?: React.ComponentProps<typeof InputField>;
}

export function Input({ GluestackInputProps, InputFieldProps }: InputProps) {
  return (
    <GluestackInput
      bg="$coolGray700"
      size="lg"
      px={'$4'}
      height={56}
      mb={'$4'}
      borderWidth={0}
      $focus={{
        borderWidth: 2,
        borderColor: '$green500',
      }}
      {...GluestackInputProps}
    >
      <InputField
        fontFamily="$body"
        fontSize={'$md'}
        color="$white"
        placeholderTextColor="$coolGray300"
        {...InputFieldProps}
      />
    </GluestackInput>
  );
}
