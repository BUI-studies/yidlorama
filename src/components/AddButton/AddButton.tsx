import { FC } from 'react'
import { AddButtonProps } from './types'
import classes from './AddButton.module.scss'

const AddButton: FC<AddButtonProps> = ({action}) => {
    return (
        <button
            className={classes.addButton}
            onClick={action}>
        </button>
    )
}
      
export default AddButton