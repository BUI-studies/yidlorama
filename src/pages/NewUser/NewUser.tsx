import { FC } from 'react'
import { UniversalForm } from '@/components'
import { UsersLoaderData, User } from './types'
import classes from './NewUser.module.scss'
import { useLoaderData } from 'react-router-dom'

const NewUser: FC = () => {
  return (
    <>
      <h1>New user</h1>
      <UniversalForm data={hyi}/>
    </>
  )
}

export default NewUser