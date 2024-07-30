import { FormProps } from '@/cocomponents/UniversalForm/types.tsx'

export const newUserFormProps: FormProps = {
  title: 'New user',
  action: '/api/users',
  method: 'POST',
  inputs: [
    {
      id: 'name',
      type: 'text',
      placeHolder: 'Enter name',
      value: '',
      name: 'name',
      required: true,
      label: 'Name'
    },
    {
      id: 'email',
      type: 'email',
      placeHolder: 'Enter email',
      value: '',
      name: 'email',
      required: true,
      label: 'Email'
    },
    {
      id: 'password',
      type: 'password',
      placeHolder: 'Enter password',
      value: '',
      name: 'password',
      required: true,
      label: 'Password'
    },
    {
      id: 'role',
      type: 'select',
      placeHolder: 'Select role',
      value: '',
      name: 'role',
      required: true,
      label: 'Role',
      options: [
        {
          value: 'admin',
          label: 'Admin'
        },
        {
          value: 'user',
          label: 'User'
        }
      ]
    }
  ],
  button: {
    text: 'Create',
    clickHandler: () => console.log('Create button clicked')
  }
}