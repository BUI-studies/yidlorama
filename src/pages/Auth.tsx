import { UniversalModal, UniversalForm } from '../components';
import { FormProps, Method } from '../components/UniversalForm/types';
import { InputType } from '../components/Input/type';
import { FC, useState } from "react";
import classes from './Auth.module.scss';

const newUserFormData: FormProps = {
  title: "Новий користувач",
  action: "/auth",
  method: Method.POST,
  inputs: [
    {
      id: "1",
      type: InputType.TEXT,
      placeHolder: "Enter your username",
      name: "username",
      label: "Username"
    },
    {
      id: "2",
      label: "Password",
      type: InputType.PASSWORD,
      placeHolder: "Enter your password",
      name: "password",
      required: true
    },
    {
      id: "3",
      label: "Email",
      type: InputType.EMAIL,
      placeHolder: "Enter your email",
      name: "email"
    },
    {
      id: "4",
      label: "Your birthdate",
      type: InputType.DATE,
      placeHolder: "Select your birthdate",
      name: "birthdate"
    },
    {
      id: "5",
      label: "Select your gender",
      type: InputType.SELECT,
      placeHolder: "choose your gender",
      value: "choose your gender",
      name: "gender",
      options: [
        { label: 'Буратіно',
          value: "ХУЙ"},
        { label: 'Карабас',
          value: "ПИЗДА"},
        { label: 'Мальвіна',
          value: "НЕОПРИДІЛИЛИСЬ"},
      ]
    }
  ],
  button: {
    text: "Зарееструватись",
    clickHandler: () => console.log("Registered")
  }

}

const Auth = () => {

  const [open, setOpen] = useState<boolean>(false)

  return (
  <>
    <h1>Auth</h1>
    <button onClick={()=>setOpen(!open)}>New user</button>
    {open && <UniversalModal title={''} setVisible={setOpen} visible={open} children={<UniversalForm data={newUserFormData} />} />}
  </>
  )
}

export default Auth
