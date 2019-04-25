import React from 'react';
import { StyledButton } from './styles';

type ButtonType = 'primary' | 'secondary' | 'transparent';
type ButtonSize = 'large' | 'middle' | 'small';

interface Props {
  text: string;
  onClick: () => void;
  type: ButtonType;
  size: ButtonSize;
  topMargin?: boolean;
  disabled?: boolean;
}

const emptyFunc = () => null;

export const Button = ({ text, onClick, type, size, topMargin, disabled }: Props) => (
  <StyledButton
    size={size}
    buttonType={type}
    disabled={disabled}
    topMargin={topMargin}
    onClick={disabled ? emptyFunc : onClick}
  >
    {text.toUpperCase()}
  </StyledButton>
);
