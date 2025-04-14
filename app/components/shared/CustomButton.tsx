import React, { ElementRef, forwardRef } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface CustomButtonProps extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'text-only';
  className?: string;
}

const CustomButton = forwardRef<ElementRef<typeof Pressable>, CustomButtonProps>(
  ({ children, color = 'primary', variant = 'contained', className, ...rest }, ref) => {
    const btnColor = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    }[color];

    const textColor = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
    }[color];

    if (variant === 'text-only') {
      return (
        <Pressable
          ref={ref}
          className={`p-3 ${className}`}
          {...rest}>
          <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        ref={ref}
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        {...rest}>
        <Text className="text-white text-center font-work-medium">{children}</Text>
      </Pressable>
    );
  },
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
