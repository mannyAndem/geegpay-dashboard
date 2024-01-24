import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, id, onChange, ...rest }: InputProps) => {
  return <input onChange={onChange} name={name} id={id} {...rest} />;
};

export default Input;
