import { FC } from 'react'
import classes from './AddButton.module.scss'

type AddButtonProps = {
    action: () => void
}

const AddButton: FC<AddButtonProps> = ({action}) => {
    return (
        <button
            className={classes.addButton}
            onClick={action}>
        </button>
    )
}
      
export default AddButton