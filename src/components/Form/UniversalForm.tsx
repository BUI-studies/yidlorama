import { FC } from 'react';
// import { Button } from '../index';
import { Form } from 'react-router-dom'
import { FormProps } from './types.tsx'
import classes from './UniversalForm.module.css';

const UniversalForm: FC<FormProps> = (data) => {

  return (
    <Form method={data.method} action={data.action}>
      <p>{data.title}</p>
      {data.inputs.map((input) => <input type={input.type} placeholder={input.placeHolder} name={input.name}/>)}
    </Form>
  )
} 