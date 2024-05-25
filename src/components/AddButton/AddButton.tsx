import { FC } from 'react'
import classes from './addButton.module.scss'

type AddButtonProps = {
    action: () => void
}

const AddButton: FC<AddButtonProps> = ({action}) => {
    return (
        <button
            className={classes.AddButton}
            onClick={action}>
        </button>
    )
}
      
export default AddButton