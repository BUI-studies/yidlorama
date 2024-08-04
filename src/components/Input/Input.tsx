import { FC, useState } from "react";
import { INPUT_TYPE, InputElementProps } from "../Input/type";
import classes from './Input.module.scss';

const Input: FC<InputElementProps> = ({type, placeHolder, name, required, id, options=[], value, label}: InputElementProps) => {
  const [enteredValue, setValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setErrorMessage(validation(type, enteredValue));
  }

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newValue = (e.target as HTMLInputElement).value;
    setValue(newValue);
    setErrorMessage(validation(type, enteredValue));
  }
  return (
    <label className={classes.inputContainer}>
      {<span className={classes.inputLabel}>{label}</span>}
      <p className={classes.error}>{errorMessage}</p>
      {type === INPUT_TYPE.SELECT?
        (<select name={name} className={classes.inputItem} required={required}>
          <option className={classes.inputItem} disabled selected value={value} >{placeHolder}</option>
          {options.map((option) => <option key={`${id}${option.value}`} className={classes.inputItem} value={option.value}>{option.label}</option>)}
        </select>):
        (<input type={type} placeholder={placeHolder} name={name} onChange={(ev)=>handleOnChange(ev)} onKeyUp={(ev)=>handleOnKeyUp(ev)} className={classes.inputItem} required={required}/>)}
    </label>
  )
}
export default Input;

const validation = (type: INPUT_TYPE, value: string): string => {
  switch (type) {
    case INPUT_TYPE.TEXT:
      return value.length <= 3
        ? "Введіть більше 3-х символів"
        : '';
    case INPUT_TYPE.PASSWORD:
      const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return !passwordRegexp.test(value)
        ? "min 4 букви та 4 цифри"
        : '';
    case INPUT_TYPE.EMAIL:
      const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return !emailRegexp.test(value)
        ? "невірний формат"
        : '';
    case INPUT_TYPE.DATE:
      const dateRegexp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
      return !dateRegexp.test(value)
        ? "невірний формат"
        : '';
    case INPUT_TYPE.SELECT:
      return value === ''
      ? "оберіть опцію"
      : '';
    default:
      return '';
  }
};