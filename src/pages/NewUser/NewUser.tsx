import { FC } from 'react'
import { UniversalForm } from '@/components'
import { UsersLoaderData, User } from './types'
import { useLoaderData } from 'react-router-dom'
import { newUserFormProps } from './helper'
import classes from './NewUser.module.scss'

const NewUser: FC = () => {
  return (
    <>
      <h1>New user</h1>
      <UniversalForm data={newUserFormProps}/>
    </>
  )
}

export default NewUser