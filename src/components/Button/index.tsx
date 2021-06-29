import { ButtonHTMLAttributes } from 'react';

import '../Button/styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    // spread operator => distribui todas as propriedades recebidas como parâmetro dentro do button
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}

