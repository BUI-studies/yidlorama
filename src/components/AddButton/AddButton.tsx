import classes from './AddButton.module.scss'

type AddButtonProps = {
    action: () => void
}
const AddButton = ({action}:AddButtonProps) => {
    return (
        <button
            className={classes.AddButton}
            onClick={action}>
        </button>
    )
}
      
export default AddButton