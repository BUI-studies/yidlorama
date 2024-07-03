import { Modal, UniversalForm } from '../components';
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
        {value: "ХУЙ"},
        {value: "ПИЗДА"},
        {value: "НЕОПРИДІЛИЛИСЬ"},
      ]
    }
  ],
  button: {
    text: "Зарееструватись",
    clickHandler: () => console.log("Registered")
  }

}

// let openModal = () => {
//   <Modal isOpen={true} content={<UniversalForm data={newUserFormData} />} />
// }


const Auth = () => {

  const [open, setOpen] = useState<boolean>(false)
  
  return (
  <>
    <h1>Auth</h1>
    <button onClick={()=>setOpen(!open)}>New user</button>
    {open && <Modal isOpen={open} content={<UniversalForm data={newUserFormData} />} />}
  </>
  )
}

export default Auth

const postNewUser = async (method: string, endPoint: string, newUser: object) => {
  const response = await fetch(endPoint, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  const newUserData = await response.json();
  return newUserData;
}
export const newUserAction = async ({request}) => {
  const formData = await request.formData();
  console.log(formData.get('username'))
  const collectedFormData = {
    username: formData.get('username'),
    password: formData.get('password'),
    email: formData.get('email'),
    birthdate: formData.get('birthdate'),
    userID: formData.get('userID'),
  }
  const newUser = await postNewUser(newUserFormData.method, `https://jsonplaceholder.typicode.com/posts`, collectedFormData)
  console.log(newUser)
  return newUser;
}
