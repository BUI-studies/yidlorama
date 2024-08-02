import { FC } from 'react'
import { PlusBtn } from './PlusBtn'
import { AddButtonProps } from './types'
import classes from './AddButton.module.scss'

const AddButton: FC<AddButtonProps> = ({action}) => {
    return (
        <button
            className={classes.addButton}
            onClick={action}>
                {PlusBtn.plusIcon}
        </button>
    )
}
      
export default AddButton