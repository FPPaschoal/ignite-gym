import {
  AlertCircleIcon,
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input as GluestackInput,
  InputField,
} from '@gluestack-ui/themed';

interface InputProps {
  GluestackInputProps?: React.ComponentProps<typeof GluestackInput>;
  InputFieldProps?: React.ComponentProps<typeof InputField>;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  errorMessage?: string;
}

export function Input({
  GluestackInputProps,
  InputFieldProps,
  isInvalid,
  isReadOnly,
  errorMessage,
}: InputProps) {
  return (
    <Box w="$full" mb={'$4'}>
      <FormControl size="md" isInvalid={isInvalid} isReadOnly={isReadOnly}>
        <GluestackInput
          bg="$coolGray700"
          size="lg"
          px={'$4'}
          height={56}
          borderWidth={0}
          $focus={{
            borderWidth: 1,
            borderColor: '$green500',
          }}
          $invalid={{
            borderWidth: 1,
            borderColor: '$red500',
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
        <FormControlError>
          <FormControlErrorText color="$red500">
            {errorMessage}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  );
}
