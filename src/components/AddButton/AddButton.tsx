import { FC } from 'react'
import { AddButtonProps } from './types'
import { Link } from 'react-router-dom'
import classes from './AddButton.module.scss'

const AddButton: FC<AddButtonProps> = ({action, type = 'button'}, url='/') => {
    return (
        type === 'button' ? <button className={classes.addButton} onClick={action}></button> : <Link to={url} className={classes.addButton}></Link>
    )
}
      
export default AddButton