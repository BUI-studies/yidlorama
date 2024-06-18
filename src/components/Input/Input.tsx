import { FC, useState } from "react";
import { InputType, InputElementProps } from "../Input/type";
import classes from './Input.module.scss';

const Input: FC<InputElementProps> = ({type, placeHolder, name, required, id, options=[], value}: InputElementProps) => {
  const [enteredValue, setValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsValid(validation(type, newValue));
  }

  return (
    <div className={classes.inputContainer}>
      {!isValid? errorElement(type, isValid) : ``}
      {type === InputType.SELECT &&
        (<select name={name} className={classes.input} required={required}>
            <option className={classes.input} disabled selected value={value} >{placeHolder}</option>
            {options.map((option) => <option key={`${id}${option.value}`} className={classes.input}>{option.value}</option>)}
          </select>)
      }
      {type !== InputType.SELECT && (<input type={type} placeholder={placeHolder} name={name} onChange={handleOnChange} className={classes.input} required={required}/>)}
    </div>
  )
}

export default Input;

const validation = (type: string, enteredValue: string) => {
  switch (type) {
    case 'text':
      return enteredValue.length >= 3;
    case 'password':
      const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return passwordRegexp.test(enteredValue);
    case 'email':
      const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegexp.test(enteredValue);
      case 'date':
        const dateRegexp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
        return dateRegexp.test(enteredValue);
    default:
      return false;
  }
} 

const errorElement = (type: string, isValid: boolean | null) => {
  switch (type) {
    case 'text':
      return <p className={isValid? `` : classes.error}>Введіть більше 3-х символів</p>;
    case 'password':
      return <p className={isValid? `` : classes.error}>min 4 букви та 4 цифри</p>;
    case 'email':
      return <p className={isValid? `` : classes.error}>невірний формат</p>;
    case 'select':
      return <p className={isValid? `` : classes.error}>оберіть опцію</p>;
    default:
      return <p className={isValid? `` : classes.error}>перевірте правильність вводу</p>;;
  }
}