import React, { ReactNode } from 'react';
import { Button } from './ui/button';

interface ButtonComponentProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; // HTML button types
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
  disabled?: boolean;
  children?: ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  onClick = () => {},
  type = 'button',
  variant = 'default',
  disabled = false,
  children,
}) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled} variant={variant}>
      {children || label}
    </Button>
  );
};

export default ButtonComponent;
