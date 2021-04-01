import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps): React.ReactElement => (
  <ButtonStyle type="button" {...rest}>
    {children}
  </ButtonStyle>
);

export default Button;
