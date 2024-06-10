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
      {data.inputs.map((input) => <Input key={input.id} type={input.type} placeHolder={input.placeHolder} name={input.name}/>)}
      <button className={classes.formButton} type="submit" onClick={data.button.clickHandler} >{data.button.text}</button>
    </Form>
  )
} 

export default UniversalForm;