import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    // spread operator => distribui todas as propriedades recebidas como parâmetro dentro do button
    <button className="button" {...props} />
  )
}

