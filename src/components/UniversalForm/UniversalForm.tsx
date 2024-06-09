import { FC, useState } from 'react';
import { Form } from 'react-router-dom'
import { FormProps } from './types.tsx'
import { Input } from '../index.ts'
import classes from './UniversalForm.module.scss';

// const UniversalForm: FC<FormProps> = (data: FormProps) => {
const UniversalForm: FC<{ data: FormProps }> = ({ data }) => {
  return (
    <Form className={classes.form} method={data.method} action={data.action}>
      <p className={classes.formTitle}>{data.title}</p>
      {/* {data.inputs.map((input) => <Input type={input.type} placeHolder={input.placeHolder} name={input.name}/>)} */}
      {data.inputs.map((input) => <input type={input.type} placeholder={input.placeHolder} name={input.name}/>)}
      <button className={classes.formButton} type="submit" onClick={data.button.clickHandler} >{data.button.text}</button>
    </Form>
  )
} 

export default UniversalForm;


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