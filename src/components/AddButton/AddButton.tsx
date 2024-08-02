import { FC } from 'react'
import { AddButtonProps } from './types'
import { Link } from 'react-router-dom'
import classes from './AddButton.module.scss'

const AddButton: FC<AddButtonProps> = ({action, type = 'button', to='/'}) => {
    if(type === 'link' && !to) throw new Error('Link must have a destination')
    if(type === 'button' && to) throw new Error('Button should not have a destination')

    switch(type){
        case 'button':
            return <button className={classes.addButton} onClick={action} />
        case 'link':
            return <Link to={to} className={classes.addButton} />
        default:
            throw new Error('Invalid button type')
    }
}
      
export default AddButton