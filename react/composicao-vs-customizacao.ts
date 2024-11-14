// Composição vs Customização

// Ao invés de fazer a customização de componentes, 
// o ideal é usar o pattern de composição de componentes, pois é mais flexível.

// Customização
import { ReactNode } from "react";

interface InputProps {
  label?: string;
  leftIcon?: ReactNode;
  icon?: ReactNode;
  errorMessage?: string;
}

export function Input({ label, icon = null, leftIcon = null, errorMessage }: InputProps) {
  return (
    <div>
      { label ? <label>{label}</label> : null }
      { leftIcon }
      <input type="text"/>
      { icon }

      { errorMessage ? <p>{errorMessage}</p> : null }
    </div>
  )
}

// Chamando o componente
<Input 
  label="Nome"
  errorMessage="Digite seu nome corretamente"
  icon={<div/>}
/>


// Composição
import { LabelHTMLAttributes, ReactNode } from "react"

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <div>
      {children}
    </div>
  )
}

export function FormField() {
  return (
    <input type="text" />
  )
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: LabelProps) {
  return (
    <label {...props} />
  )
}

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <span>
      {message}
    </span>
  )
}

interface IconProps {
  children: ReactNode;
}

export function Icon({ children }: IconProps) {
  return (
    <span>{children}</span>
  )
}

// Chamando o componente
<Input.Root>
  <Input.Label />
  <Input.FormField />
  <Input.Icon>
    <span />
  </Input.Icon>
  <Input.ErrorMessage message="Digite seu Nome corretamente" />
</Input.Root>