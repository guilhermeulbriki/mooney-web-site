import React from 'react';

import { ButtonComponent } from './styles';

interface ButtonProps {
  category: 'primary' | 'ghost' | 'white';
}

const Button: React.FC<ButtonProps> = ({ category, children }) => {
  return <ButtonComponent category={category}>{children}</ButtonComponent>;
};

export default Button;
