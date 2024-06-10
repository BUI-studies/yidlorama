import { FC, useState } from "react";
import { InputProps } from "./type.tsx";
import classes from './Input.module.scss';

const validation = (type: string, value: string) => {
  switch (type) {
    case 'text':
      return value.length >= 3;
    case 'password':
      const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return passwordRegexp.test(value);
    case 'email':
      const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegexp.test(value);
      case 'date':
        const dateRegexp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
        return dateRegexp.test(value);
    default:
      return false;
  }
} 

const errorElement = (type: string, isValid: boolean | null) => {
  switch (type) {
    case 'text':
      return <p className={isValid? `` : classes.error}>Векдіть більше символів</p>;
    case 'password':
      return <p className={isValid? `` : classes.error}>мін 4 букви ті 4 цифри</p>;
    case 'email':
      return <p className={isValid? `` : classes.error}>невірний формат</p>;;
    default:
      return <p className={isValid? `` : classes.error}>перевірте правильність вводу</p>;;
  }
}

const Input: FC<InputProps> = ({type, placeHolder, name}: InputProps) => {
  const [value, setValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsValid(validation(type, newValue));
  }

  return (
    <div className={classes.inputContainer}>
      {!isValid? errorElement(type, isValid) : ``}
      <input type={type} placeholder={placeHolder} name={name} onChange={handleOnChange} value={value} className={classes.input}/>
    </div>
  )
}

export default Input;



