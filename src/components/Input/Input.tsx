import { FC } from "react";
import { InputProps } from "./type.tsx";
import classes from './Input.module.scss';

const Input: FC<InputProps> = ({type, placeHolder, name}: InputProps) => {
  
  return (
    <input type={type} placeholder={placeHolder} name={name}/>
  )
}

export default Input;

const validation = (type: string, value: string) => {
  switch (type) {
    case 'text':
      value.length < 3 && <p className={classes.error}>Введіть більше 3-х символів</p>;
    case 'password':
      const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      !passwordRegexp.test(value) && <p className={classes.error}>Пароль повинен містити букви та цифри</p>;
      return 'password';
    case 'email':
      const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      !emailRegexp.test(value) && <p className={classes.error}>Введіть коректний email</p>;
      return 'email';
    case 'date':
      return 'date';
    case 'select':
      return 'select';
    default:
      return 'text';
  }
} 