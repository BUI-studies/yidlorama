import { FC, useState } from "react";
import { InputType, InputElementProps } from "../Input/type";
import classes from './Input.module.scss';

const Input: FC<InputElementProps> = ({type, placeHolder, name, required, id, options=[], value, label}: InputElementProps) => {
  const [enteredValue, setValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setErrorMessage(validation(type, enteredValue));
  }
  return (
    <label className={classes.inputContainer}>
      {<span className={classes.inputLabel}>{label}</span>}
      {errorMessage}
      {type === InputType.SELECT?
        (<select name={name} className={classes.inputItem} required={required}>
            <option className={classes.inputItem} disabled selected value={value} >{placeHolder}</option>
            {options.map((option) => <option key={`${id}${option.value}`} className={classes.inputItem}>{option.value}</option>)}
        </select>):
        (<input type={type} placeholder={placeHolder} name={name} onChange={handleOnChange} className={classes.inputItem} required={required}/>)}
    </label>
  )
}

export default Input;

const validation = (type: InputType, value: string): JSX.Element | string => {
  switch (type) {
    case InputType.TEXT:
      return value.length <= 3
        ? <p className={classes.error}>Введіть більше 3-х символів</p>
        : '';
    case InputType.PASSWORD:
      const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return !passwordRegexp.test(value)
        ? <p className={classes.error}>min 4 букви та 4 цифри</p>
        : '';
    case InputType.EMAIL:
      const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return !emailRegexp.test(value)
        ? <p className={classes.error}>невірний формат</p>
        : '';
    case InputType.DATE:
      const dateRegexp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
      return !dateRegexp.test(value)
        ? <p className={classes.error}>невірний формат</p>
        : '';
    case InputType.SELECT:
      return value === ''
      ? <p className={classes.error}>оберіть опцію</p>
      : '';
    default:
      return '';
  }
};